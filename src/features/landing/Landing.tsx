import React, { useState, useRef } from 'react'
import {
  Button,
  Select,
  Typography,
  Card,
  Row,
  Col,
  Flex,
  Form,
  Input,
  message,
} from 'antd'
import { useTranslation } from 'react-i18next'
import SwipeableDrawer, { SwipeableDrawerMethods } from '../../components/SwipeableDrawer'
import {
  BookOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  TrophyOutlined,
  HeartOutlined,
  RocketOutlined,
  SmileOutlined,
  CheckCircleOutlined,
  StarOutlined,
  UsergroupAddOutlined,
  CommentOutlined,
  FireOutlined,
  LikeOutlined,
} from '@ant-design/icons'
import Logo from '../../assets/Logo.png'
import Olga from '../../assets/Olga.jpg'
import './Landing.scss'

const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

const TELEGRAM_TOKEN = '8251337207:AAGauA4UqH9FQ4gXRT1eG62m9IoiH_egW1Q'
const CHAT_ID = '-1003047352853'

export default function Landing() {
  const { t, i18n } = useTranslation('common')
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const languageDrawerRef = useRef<SwipeableDrawerMethods>(null)

  const languages = [
    { value: 'en', label: `🇬🇧 ${t('LANG_EN')}` },
    { value: 'fr', label: `🇫🇷 ${t('LANG_FR')}` },
    { value: 'ru', label: `🇷🇺 ${t('LANG_RU')}` },
  ]

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng)
    languageDrawerRef.current?.close()
  }

  const handleSubmit = async (values: any) => {
    setLoading(true)
    const { name, email, telegram, message: msg } = values

    const styledMessage = `
👤 *Client Information:*
• *Name:* ${name}
• *Telegram:* ${telegram || 'Not provided'}
• *Email:* ${email}

💬 *Message:*
${msg}
    `.trim()

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: styledMessage,
            parse_mode: 'Markdown',
          }),
        },
      )

      if (response.ok) {
        message.success(t('MESSAGE_SENT') || 'Message sent successfully!')
        form.resetFields()
      } else {
        message.error(t('MESSAGE_FAILED') || 'Failed to send message.')
      }
    } catch (err) {
      message.error(t('MESSAGE_ERROR') || 'Error sending message.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <img src={Logo} alt="La Classe" className="logo" />
              <Title level={3} className="logo-text">
                {t('APP_NAME')}
              </Title>
            </div>
            <div className="language-selector">
              <Text className="language-label language-label-desktop">{t('LANGUAGE')}:</Text>
              <Select
                size="middle"
                className="language-select language-select-desktop"
                options={languages}
                value={i18n.language}
                onChange={(lng) => i18n.changeLanguage(lng)}
              />
              <Button
                className="language-button-mobile"
                onClick={() => languageDrawerRef.current?.open()}
              >
                {languages.find(l => l.value === i18n.language)?.label}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <Row gutter={[48, 32]} align="middle">
              <Col xs={24} lg={14}>
                <div className="hero-text">
                  <Title level={1} className="hero-title">
                    {t('APP_NAME')}
                  </Title>
                  <Title level={2} className="hero-subtitle">
                    {t('TAGLINE')}
                  </Title>
                  <Paragraph className="hero-description">{t('HERO_SUBTITLE')}</Paragraph>
                  <Paragraph className="hero-description-detail">
                    {t('HERO_DESCRIPTION')}
                  </Paragraph>
                  <div className="hero-buttons">
                    <Button
                      type="primary"
                      size="large"
                      className="cta-button"
                      href="https://t.me/laclassefr"
                      target="_blank"
                      rel="noreferrer"
                      icon={<RocketOutlined />}
                    >
                      {t('HERO_CTA')}
                    </Button>
                  </div>
                  <div className="hero-stats">
                    <div className="stat-item">
                      <StarOutlined className="stat-icon" />
                      <div>
                        <div className="stat-number">{t('HAPPY_STUDENTS_COUNT')}</div>
                        <div className="stat-label">{t('HAPPY_STUDENTS')}</div>
                      </div>
                    </div>
                    <div className="stat-item">
                      <TrophyOutlined className="stat-icon" />
                      <div>
                        <div className="stat-number">{t('SUCCESS_RATE_PERCENT')}</div>
                        <div className="stat-label">{t('SUCCESS_RATE')}</div>
                      </div>
                    </div>
                    <div className="stat-item">
                      <FireOutlined className="stat-icon" />
                      <div>
                        <div className="stat-number">{t('LESSONS_TAUGHT_COUNT')}</div>
                        <div className="stat-label">{t('LESSONS_TAUGHT')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={10}>
                <div className="hero-image-container">
                  <img
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=600&fit=crop"
                    alt="Happy students learning French in an engaging online classroom environment with interactive lessons and cultural immersion"
                    className="hero-image"
                  />
                  <div className="hero-image-decoration">
                    <div className="floating-icon icon-1">
                      <BookOutlined />
                    </div>
                    <div className="floating-icon icon-2">
                      <GlobalOutlined />
                    </div>
                    <div className="floating-icon icon-3">
                      <HeartOutlined />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="container">
            <div className="section-header">
              <Title level={2} className="section-title">
                {t('ABOUT_TITLE')}
              </Title>
              <div className="title-decoration">
                <span className="decoration-line"></span>
                <SmileOutlined className="decoration-icon" />
                <span className="decoration-line"></span>
              </div>
            </div>
            <Paragraph className="section-description">{t('ABOUT_DESC')}</Paragraph>
            <Row gutter={[24, 24]} className="features-grid">
              <Col xs={24} sm={12} md={6}>
                <Card className="feature-card" bordered={false} hoverable>
                  <div className="feature-icon-wrapper">
                    <UsergroupAddOutlined className="feature-icon" />
                  </div>
                  <Text className="feature-text">{t('ABOUT_FEATURE_1')}</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="feature-card" bordered={false} hoverable>
                  <div className="feature-icon-wrapper">
                    <TrophyOutlined className="feature-icon" />
                  </div>
                  <Text className="feature-text">{t('ABOUT_FEATURE_2')}</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="feature-card" bordered={false} hoverable>
                  <div className="feature-icon-wrapper">
                    <ClockCircleOutlined className="feature-icon" />
                  </div>
                  <Text className="feature-text">{t('ABOUT_FEATURE_3')}</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="feature-card" bordered={false} hoverable>
                  <div className="feature-icon-wrapper">
                    <BookOutlined className="feature-icon" />
                  </div>
                  <Text className="feature-text">{t('ABOUT_FEATURE_4')}</Text>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Levels Section */}
        <section className="levels-section">
          <div className="container">
            <div className="section-header">
              <Title level={2} className="section-title">
                {t('LEVELS_TITLE')}
              </Title>
              <div className="title-decoration">
                <span className="decoration-line"></span>
                <TrophyOutlined className="decoration-icon" />
                <span className="decoration-line"></span>
              </div>
            </div>
            <Paragraph className="section-description">{t('LEVELS_DESC')}</Paragraph>
            <Row gutter={[32, 32]} className="levels-grid">
              <Col xs={24} md={12}>
                <Card className="level-card" hoverable>
                  <div className="level-image-wrapper">
                    <img
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop"
                      alt="Beginner A1 level French students learning basic conversational skills and fundamental grammar"
                      className="level-image"
                    />
                    <div className="level-badge">A1</div>
                  </div>
                  <div className="level-content">
                    <Title level={3} className="level-title">
                      {t('LEVEL_A1_TITLE')}
                    </Title>
                    <Paragraph className="level-description">
                      {t('LEVEL_A1_DESC')}
                    </Paragraph>
                    <div className="schedule-info">
                      <ClockCircleOutlined />
                      <Text className="schedule-text">{t('SCHEDULE_A1')}</Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card className="level-card" hoverable>
                  <div className="level-image-wrapper">
                    <img
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop"
                      alt="Intermediate A2/B1 level French students engaging in advanced conversations and complex grammar exercises"
                      className="level-image"
                    />
                    <div className="level-badge">A2/B1</div>
                  </div>
                  <div className="level-content">
                    <Title level={3} className="level-title">
                      {t('LEVEL_A2_TITLE')}
                    </Title>
                    <Paragraph className="level-description">
                      {t('LEVEL_A2_DESC')}
                    </Paragraph>
                    <div className="schedule-info">
                      <ClockCircleOutlined />
                      <Text className="schedule-text">{t('SCHEDULE_A2')}</Text>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Format Section */}
        <section className="format-section">
          <div className="container">
            <div className="section-header">
              <Title level={2} className="section-title">
                {t('FORMAT_TITLE')}
              </Title>
              <div className="title-decoration">
                <span className="decoration-line"></span>
                <CheckCircleOutlined className="decoration-icon" />
                <span className="decoration-line"></span>
              </div>
            </div>
            <Row gutter={[24, 16]}>
              <Col xs={24} md={12}>
                <div className="format-item">
                  <div className="format-bullet">
                    <CheckCircleOutlined />
                  </div>
                  <Text className="format-text">{t('FORMAT_ITEM_1')}</Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="format-item">
                  <div className="format-bullet">
                    <CheckCircleOutlined />
                  </div>
                  <Text className="format-text">{t('FORMAT_ITEM_2')}</Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="format-item">
                  <div className="format-bullet">
                    <CheckCircleOutlined />
                  </div>
                  <Text className="format-text">{t('FORMAT_ITEM_3')}</Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="format-item">
                  <div className="format-bullet">
                    <CheckCircleOutlined />
                  </div>
                  <Text className="format-text">{t('FORMAT_ITEM_4')}</Text>
                </div>
              </Col>
              <Col xs={24}>
                <div className="format-item">
                  <div className="format-bullet">
                    <CheckCircleOutlined />
                  </div>
                  <Text className="format-text">{t('FORMAT_ITEM_5')}</Text>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Teacher Section */}
        <section className="teacher-section">
          <div className="container">
            <div className="section-header">
              <Title level={2} className="section-title">
                {t('TEACHER_TITLE')}
              </Title>
              <div className="title-decoration">
                <span className="decoration-line"></span>
                <HeartOutlined className="decoration-icon" />
                <span className="decoration-line"></span>
              </div>
            </div>
            <Card className="teacher-card">
              <Row gutter={[48, 24]} align="middle">
                <Col xs={24} md={8} className="teacher-image-col">
                  <div className="teacher-avatar-wrapper">
                    <img
                      src={Olga}
                      alt="Professional French teacher Olga with extensive teaching experience and passion for language education"
                      className="teacher-photo"
                    />
                    <div className="teacher-badge">
                      <StarOutlined /> Expert Teacher
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={16}>
                  <Title level={3} className="teacher-name">
                    {t('TEACHER_NAME')}
                  </Title>
                  <div className="teacher-credentials">
                    <div className="credential-item">
                      <TrophyOutlined /> {t('YEARS_EXPERIENCE')}
                    </div>
                    <div className="credential-item">
                      <CheckCircleOutlined /> {t('CERTIFIED_TEACHER')}
                    </div>
                    <div className="credential-item">
                      <HeartOutlined /> {t('HAPPY_STUDENTS_COUNT')}
                    </div>
                  </div>
                  <Paragraph className="teacher-description">
                    {t('TEACHER_DESC')}
                  </Paragraph>
                  <blockquote className="teacher-quote">
                    <CommentOutlined className="quote-icon" />
                    <Text italic>&ldquo;{t('TEACHER_QUOTE')}&rdquo;</Text>
                  </blockquote>
                </Col>
              </Row>
            </Card>
          </div>
        </section>

        {/* Results Section */}
        <section className="results-section">
          <div className="container">
            <div className="section-header">
              <Title level={2} className="section-title">
                {t('RESULTS_TITLE')}
              </Title>
              <Paragraph className="section-subtitle">{t('RESULTS_SUBTITLE')}</Paragraph>
              <div className="title-decoration">
                <span className="decoration-line"></span>
                <TrophyOutlined className="decoration-icon" />
                <span className="decoration-line"></span>
              </div>
            </div>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={12} lg={6}>
                <Card className="result-card" bordered={false}>
                  <div className="result-icon-wrapper">
                    <CommentOutlined className="result-icon" />
                  </div>
                  <Title level={4} className="result-title">
                    {t('RESULT_1_TITLE')}
                  </Title>
                  <Paragraph className="result-description">
                    {t('RESULT_1_DESC')}
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card className="result-card" bordered={false}>
                  <div className="result-icon-wrapper">
                    <FireOutlined className="result-icon" />
                  </div>
                  <Title level={4} className="result-title">
                    {t('RESULT_2_TITLE')}
                  </Title>
                  <Paragraph className="result-description">
                    {t('RESULT_2_DESC')}
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card className="result-card" bordered={false}>
                  <div className="result-icon-wrapper">
                    <GlobalOutlined className="result-icon" />
                  </div>
                  <Title level={4} className="result-title">
                    {t('RESULT_3_TITLE')}
                  </Title>
                  <Paragraph className="result-description">
                    {t('RESULT_3_DESC')}
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card className="result-card" bordered={false}>
                  <div className="result-icon-wrapper">
                    <CheckCircleOutlined className="result-icon" />
                  </div>
                  <Title level={4} className="result-title">
                    {t('RESULT_4_TITLE')}
                  </Title>
                  <Paragraph className="result-description">
                    {t('RESULT_4_DESC')}
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <div className="section-header">
              <Title level={2} className="section-title">
                {t('TESTIMONIALS_TITLE')}
              </Title>
              <Paragraph className="section-subtitle">
                {t('TESTIMONIALS_SUBTITLE')}
              </Paragraph>
              <div className="title-decoration">
                <span className="decoration-line"></span>
                <SmileOutlined className="decoration-icon" />
                <span className="decoration-line"></span>
              </div>
            </div>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card
                  className="testimonial-card"
                  bordered={false}
                  style={{ height: '100%' }}
                >
                  <Flex
                    vertical
                    justify="space-between"
                    style={{ minHeight: 220, height: '100%' }}
                  >
                    <div>
                      <div className="testimonial-quote-icon">
                        <CommentOutlined />
                      </div>
                      <Paragraph className="testimonial-text">
                        &ldquo;{t('TESTIMONIAL_1_TEXT')}&rdquo;
                      </Paragraph>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <StarOutlined />
                      </div>
                      <div className="author-info">
                        <Text className="author-name">{t('TESTIMONIAL_1_NAME')}</Text>
                        <Text className="author-level">{t('TESTIMONIAL_1_LEVEL')}</Text>
                      </div>
                    </div>
                  </Flex>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card
                  className="testimonial-card"
                  bordered={false}
                  style={{ height: '100%' }}
                >
                  <Flex
                    vertical
                    justify="space-between"
                    style={{ minHeight: 220, height: '100%' }}
                  >
                    <div>
                      <div className="testimonial-quote-icon">
                        <CommentOutlined />
                      </div>
                      <Paragraph className="testimonial-text">
                        &ldquo;{t('TESTIMONIAL_2_TEXT')}&rdquo;
                      </Paragraph>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <TrophyOutlined />
                      </div>
                      <div className="author-info">
                        <Text className="author-name">{t('TESTIMONIAL_2_NAME')}</Text>
                        <Text className="author-level">{t('TESTIMONIAL_2_LEVEL')}</Text>
                      </div>
                    </div>
                  </Flex>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card
                  className="testimonial-card"
                  bordered={false}
                  style={{ height: '100%' }}
                >
                  <Flex
                    vertical
                    justify="space-between"
                    style={{ minHeight: 220, height: '100%' }}
                  >
                    <div>
                      <div className="testimonial-quote-icon">
                        <CommentOutlined />
                      </div>
                      <Paragraph className="testimonial-text">
                        &ldquo;{t('TESTIMONIAL_3_TEXT')}&rdquo;
                      </Paragraph>
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <FireOutlined />
                      </div>
                      <div className="author-info">
                        <Text className="author-name">{t('TESTIMONIAL_3_NAME')}</Text>
                        <Text className="author-level">{t('TESTIMONIAL_3_LEVEL')}</Text>
                      </div>
                    </div>
                  </Flex>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="why-us-section">
          <div className="container">
            <div className="section-header">
              <Title level={2} className="section-title">
                {t('WHY_US_TITLE')}
              </Title>
              <div className="title-decoration">
                <span className="decoration-line"></span>
                <StarOutlined className="decoration-icon" />
                <span className="decoration-line"></span>
              </div>
            </div>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card className="why-card" bordered={false} hoverable>
                  <div className="why-icon-wrapper">
                    <HeartOutlined className="why-icon" />
                  </div>
                  <Title level={4} className="why-title">
                    {t('WHY_US_1_TITLE')}
                  </Title>
                  <Paragraph className="why-description">{t('WHY_US_1_DESC')}</Paragraph>
                  <div className="card-decoration">
                    <LikeOutlined className="decoration-small-icon" />
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="why-card" bordered={false} hoverable>
                  <div className="why-icon-wrapper">
                    <TrophyOutlined className="why-icon" />
                  </div>
                  <Title level={4} className="why-title">
                    {t('WHY_US_2_TITLE')}
                  </Title>
                  <Paragraph className="why-description">{t('WHY_US_2_DESC')}</Paragraph>
                  <div className="card-decoration">
                    <StarOutlined className="decoration-small-icon" />
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="why-card" bordered={false} hoverable>
                  <div className="why-icon-wrapper">
                    <GlobalOutlined className="why-icon" />
                  </div>
                  <Title level={4} className="why-title">
                    {t('WHY_US_3_TITLE')}
                  </Title>
                  <Paragraph className="why-description">{t('WHY_US_3_DESC')}</Paragraph>
                  <div className="card-decoration">
                    <GlobalOutlined className="decoration-small-icon" />
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section">
          <div className="container">
            <div className="section-header">
              <Title level={2} className="section-title">
                {t('PRICING_TITLE')}
              </Title>
              <Paragraph className="section-subtitle">{t('PRICING_SUBTITLE')}</Paragraph>
              <div className="title-decoration">
                <span className="decoration-line"></span>
                <StarOutlined className="decoration-icon" />
                <span className="decoration-line"></span>
              </div>
            </div>
            <Row gutter={[32, 32]} justify="center">
              <Col xs={24} md={8}>
                <Card className="pricing-card" bordered={false}>
                  <Title level={3} className="pricing-title">
                    {t('PRICE_GROUP_TITLE')}
                  </Title>
                  <div className="pricing-price">
                    <span className="price-amount">{t('PRICE_GROUP_PRICE')}</span>
                    <span className="price-unit">{t('PRICE_GROUP_UNIT')}</span>
                  </div>
                  <ul className="pricing-features">
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_GROUP_FEATURE_1')}
                    </li>
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_GROUP_FEATURE_2')}
                    </li>
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_GROUP_FEATURE_3')}
                    </li>
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_GROUP_FEATURE_4')}
                    </li>
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_GROUP_FEATURE_5')}
                    </li>
                  </ul>
                  <Button
                    type="default"
                    size="large"
                    block
                    href="https://t.me/laclassefr"
                    target="_blank"
                    rel="noreferrer"
                    className="pricing-button"
                  >
                    {t('PRICE_BUTTON')}
                  </Button>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="pricing-card pricing-card-popular" bordered={false}>
                  <div className="popular-badge">{t('PRICE_POPULAR')}</div>
                  <Title level={3} className="pricing-title">
                    {t('PRICE_PRIVATE_TITLE')}
                  </Title>
                  <div className="pricing-price">
                    <span className="price-amount">{t('PRICE_PRIVATE_PRICE')}</span>
                    <span className="price-unit">{t('PRICE_PRIVATE_UNIT')}</span>
                  </div>
                  <ul className="pricing-features">
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_PRIVATE_FEATURE_1')}
                    </li>
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_PRIVATE_FEATURE_2')}
                    </li>
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_PRIVATE_FEATURE_3')}
                    </li>
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_PRIVATE_FEATURE_4')}
                    </li>
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_PRIVATE_FEATURE_5')}
                    </li>
                  </ul>
                  <Button
                    type="primary"
                    size="large"
                    block
                    href="https://t.me/laclassefr"
                    target="_blank"
                    rel="noreferrer"
                    className="pricing-button pricing-button-primary"
                  >
                    {t('PRICE_BUTTON')}
                  </Button>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="pricing-card" bordered={false}>
                  <Title level={3} className="pricing-title">
                    {t('PRICE_IMMERSION_TITLE')}
                  </Title>
                  <div className="pricing-price">
                    <span className="price-amount">{t('PRICE_IMMERSION_PRICE')}</span>
                    <span className="price-unit">{t('PRICE_IMMERSION_UNIT')}</span>
                  </div>
                  <ul className="pricing-features">
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_IMMERSION_FEATURE_1')}
                    </li>
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_IMMERSION_FEATURE_2')}
                    </li>
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_IMMERSION_FEATURE_4')}
                    </li>
                    <li>
                      <CheckCircleOutlined /> {t('PRICE_IMMERSION_FEATURE_5')}
                    </li>
                  </ul>
                  <Button
                    type="default"
                    size="large"
                    block
                    href="https://t.me/laclassefr"
                    target="_blank"
                    rel="noreferrer"
                    className="pricing-button"
                  >
                    {t('PRICE_BUTTON')}
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <Title level={2} className="section-title">
                {t('FAQ_TITLE')}
              </Title>
              <div className="title-decoration">
                <span className="decoration-line"></span>
                <CommentOutlined className="decoration-icon" />
                <span className="decoration-line"></span>
              </div>
            </div>
            <Row gutter={[32, 32]}>
              <Col xs={24} lg={12}>
                <Card className="faq-card" bordered={false}>
                  <Title level={4} className="faq-question">
                    {t('FAQ_1_Q')}
                  </Title>
                  <Paragraph className="faq-answer">{t('FAQ_1_A')}</Paragraph>
                </Card>
                <Card className="faq-card" bordered={false}>
                  <Title level={4} className="faq-question">
                    {t('FAQ_2_Q')}
                  </Title>
                  <Paragraph className="faq-answer">{t('FAQ_2_A')}</Paragraph>
                </Card>
                <Card className="faq-card" bordered={false}>
                  <Title level={4} className="faq-question">
                    {t('FAQ_3_Q')}
                  </Title>
                  <Paragraph className="faq-answer">{t('FAQ_3_A')}</Paragraph>
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card className="faq-card" bordered={false}>
                  <Title level={4} className="faq-question">
                    {t('FAQ_4_Q')}
                  </Title>
                  <Paragraph className="faq-answer">{t('FAQ_4_A')}</Paragraph>
                </Card>
                <Card className="faq-card" bordered={false}>
                  <Title level={4} className="faq-question">
                    {t('FAQ_5_Q')}
                  </Title>
                  <Paragraph className="faq-answer">{t('FAQ_5_A')}</Paragraph>
                </Card>
                <Card className="faq-card" bordered={false}>
                  <Title level={4} className="faq-question">
                    {t('FAQ_6_Q')}
                  </Title>
                  <Paragraph className="faq-answer">{t('FAQ_6_A')}</Paragraph>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <div className="cta-icon-group">
                <RocketOutlined className="cta-decoration-icon" />
              </div>
              <Title level={2} className="cta-title">
                {t('CTA_TITLE')}
              </Title>
              <Paragraph className="cta-description">{t('CTA_DESC')}</Paragraph>
              <Button
                type="primary"
                size="large"
                className="cta-button-large"
                href="https://t.me/laclassefr"
                target="_blank"
                rel="noreferrer"
                icon={<RocketOutlined />}
              >
                {t('CTA_BUTTON')}
              </Button>
              <div className="cta-trust-badges">
                <div className="trust-badge">
                  <CheckCircleOutlined /> {t('TRUST_BADGE_SATISFACTION')}
                </div>
                <div className="trust-badge">
                  <HeartOutlined /> {t('TRUST_BADGE_COMMUNITY')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <Row gutter={[48, 32]}>
              <Col xs={24} lg={12}>
                <div className="section-heading">
                  <Title level={2} className="section-title">
                    {t('CONTACT_TITLE')}
                  </Title>
                  <Paragraph className="section-description">
                    {t('CONTACT_DESC')}
                  </Paragraph>
                  <div className="contact-info">
                    <Button
                      size="large"
                      href="https://t.me/laclassefr"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-button"
                      icon={<CommentOutlined />}
                    >
                      📱 {t('CONTACT_TELEGRAM')}
                    </Button>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <Card className="contact-form-card">
                  <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                      name="name"
                      label={t('CONTACT_NAME') || 'Your Name'}
                      rules={[
                        {
                          required: true,
                          message: t('CONTACT_NAME_REQUIRED') || 'Please enter your name',
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder={t('CONTACT_NAME_PLACEHOLDER') || 'Your Name...'}
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label={t('CONTACT_EMAIL') || 'Your Email'}
                      rules={[
                        {
                          required: true,
                          message:
                            t('CONTACT_EMAIL_REQUIRED') || 'Please enter your email',
                        },
                        {
                          type: 'email',
                          message:
                            t('CONTACT_EMAIL_INVALID') || 'Please enter a valid email',
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder={t('CONTACT_EMAIL_PLACEHOLDER') || 'Your E-mail...'}
                      />
                    </Form.Item>

                    <Form.Item
                      name="telegram"
                      label={t('CONTACT_TELEGRAM_TAG') || 'Telegram (optional)'}
                    >
                      <Input
                        size="large"
                        placeholder={
                          t('CONTACT_TELEGRAM_PLACEHOLDER') || 'Your telegram tag'
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      name="message"
                      label={t('CONTACT_MESSAGE') || 'Your Message'}
                      rules={[
                        {
                          required: true,
                          message:
                            t('CONTACT_MESSAGE_REQUIRED') || 'Please enter your message',
                        },
                      ]}
                    >
                      <TextArea
                        rows={4}
                        placeholder={t('CONTACT_MESSAGE_PLACEHOLDER') || 'Your Message'}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        block
                        loading={loading}
                        className="contact-submit-button"
                      >
                        {t('CONTACT_SUBMIT') || 'Send Message Now'}
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
            </Row>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <Text className="footer-text">
            © {new Date().getFullYear()} {t('APP_NAME')}. Français ☕️ avec plaisir
          </Text>
        </div>
      </footer>

      {/* Language Drawer for Mobile */}
      <SwipeableDrawer
        ref={languageDrawerRef}
        title={t('LANGUAGE')}
        height="auto"
      >
        <Flex vertical gap={12} style={{ width: '100%', padding: '0 16px' }}>
          {languages.map((lang) => (
            <Button
              key={lang.value}
              type={i18n.language === lang.value ? 'primary' : 'default'}
              size="large"
              block
              onClick={() => handleLanguageChange(lang.value)}
            >
              {lang.label}
            </Button>
          ))}
        </Flex>
      </SwipeableDrawer>
    </div>
  )
}
