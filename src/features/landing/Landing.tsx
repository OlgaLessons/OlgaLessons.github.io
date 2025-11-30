import React from 'react'
import { Button, Select, Typography, Card, Row, Col } from 'antd'
import { useTranslation } from 'react-i18next'
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
import './Landing.scss'

const { Title, Paragraph, Text } = Typography

export default function Landing() {
  const { t, i18n } = useTranslation('common')

  const languages = [
    { value: 'en', label: t('LANG_EN') },
    { value: 'fr', label: t('LANG_FR') },
    { value: 'ru', label: t('LANG_RU') },
  ]

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
              <Text className="language-label">{t('LANGUAGE')}:</Text>
              <Select
                size="middle"
                className="language-select"
                options={languages}
                value={i18n.language}
                onChange={(lng) => i18n.changeLanguage(lng)}
              />
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
                  <Paragraph className="hero-description-detail">{t('HERO_DESCRIPTION')}</Paragraph>
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
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Happy Students</div>
                      </div>
                    </div>
                    <div className="stat-item">
                      <TrophyOutlined className="stat-icon" />
                      <div>
                        <div className="stat-number">95%</div>
                        <div className="stat-label">Success Rate</div>
                      </div>
                    </div>
                    <div className="stat-item">
                      <FireOutlined className="stat-icon" />
                      <div>
                        <div className="stat-number">1000+</div>
                        <div className="stat-label">Lessons Taught</div>
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
                    <Paragraph className="level-description">{t('LEVEL_A1_DESC')}</Paragraph>
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
                    <Paragraph className="level-description">{t('LEVEL_A2_DESC')}</Paragraph>
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
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
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
                      <TrophyOutlined /> 5+ Years Experience
                    </div>
                    <div className="credential-item">
                      <CheckCircleOutlined /> Certified Teacher
                    </div>
                    <div className="credential-item">
                      <HeartOutlined /> 500+ Happy Students
                    </div>
                  </div>
                  <Paragraph className="teacher-description">{t('TEACHER_DESC')}</Paragraph>
                  <blockquote className="teacher-quote">
                    <CommentOutlined className="quote-icon" />
                    <Text italic>&ldquo;{t('TEACHER_QUOTE')}&rdquo;</Text>
                  </blockquote>
                </Col>
              </Row>
            </Card>
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
                  <CheckCircleOutlined /> Satisfaction Guaranteed
                </div>
                <div className="trust-badge">
                  <HeartOutlined /> Join Our Community
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <Title level={2} className="section-title">
              {t('CONTACT_TITLE')}
            </Title>
            <Paragraph className="section-description">{t('CONTACT_DESC')}</Paragraph>
            <div className="contact-buttons">
              <Button
                size="large"
                href="https://t.me/laclassefr"
                target="_blank"
                rel="noreferrer"
                className="contact-button"
              >
                📱 {t('CONTACT_TELEGRAM')}
              </Button>
            </div>
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
    </div>
  )
}


