import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailDispatcherDto } from './dto/send-email.dto';
import { Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  constructor(private readonly configService: ConfigService) {}

  async emailDispatcher(mailDispatcher: MailDispatcherDto) {
    const mailOptions = {
      to: mailDispatcher.to,
      from: mailDispatcher.from,
      subject: mailDispatcher.subject ?? 'Testing Email Transport',
      text: mailDispatcher.text,
      html: mailDispatcher.html,
      attachments: mailDispatcher.attachments,
    };

    const transporter = nodemailer.createTransport({
      service: this.configService.get('EMAIL_SERVICE'),
      auth: {
        user: this.configService.get('EMAIL_USER'),
        pass: this.configService.get('EMAIL_PASSWORD'),
      },
    });

    transporter
      .sendMail(mailOptions)
      .then(() => {
        this.logger.log('Email sent successfully');
      })
      .catch(() => {
        this.logger.error('Error sending email');
      });
  }
}
