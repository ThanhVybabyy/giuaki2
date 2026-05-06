"use client"
import { Card, Typography } from "antd"

const { Title, Paragraph } = Typography

export default function Contact() {
  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Card>
        <Title level={2}>Liên hệ</Title>

        <Paragraph>
          <b>Tên shop:</b> Flower Shop
        </Paragraph>

        <Paragraph>
          <b>Số điện thoại:</b> 0123 456 789
        </Paragraph>

        <Paragraph>
          <b>Email:</b> flowershop@gmail.com
        </Paragraph>

        <Paragraph>
          <b>Địa chỉ:</b> Biên Hòa, Đồng Nai
        </Paragraph>
      </Card>
    </div>
  )
}