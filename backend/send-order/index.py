import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту владельца."""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False)
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    sender = 'nik.belomyytsev@mail.ru'
    recipient = 'nik.belomyytsev@mail.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта — {name}'
    msg['From'] = sender
    msg['To'] = recipient

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px;">
      <h2 style="color: #111;">Новая заявка с сайта</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; color: #555;">Имя:</td><td style="padding: 8px; font-weight: bold;">{name}</td></tr>
        <tr style="background:#f9f9f9"><td style="padding: 8px; color: #555;">Телефон:</td><td style="padding: 8px; font-weight: bold;"><a href="tel:{phone}">{phone}</a></td></tr>
        {'<tr><td style="padding: 8px; color: #555;">Сообщение:</td><td style="padding: 8px;">' + message + '</td></tr>' if message else ''}
      </table>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }