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
                  icon={<GlobalOutlined />}
                >
                  {t('HERO_CTA')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="container">
            <Title level={2} className="section-title">
              {t('ABOUT_TITLE')}
            </Title>
            <Paragraph className="section-description">{t('ABOUT_DESC')}</Paragraph>
            <Row gutter={[24, 24]} className="features-grid">
              <Col xs={24} sm={12} md={6}>
                <Card className="feature-card" bordered={false}>
                  <TeamOutlined className="feature-icon" />
                  <Text className="feature-text">{t('ABOUT_FEATURE_1')}</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="feature-card" bordered={false}>
                  <TrophyOutlined className="feature-icon" />
                  <Text className="feature-text">{t('ABOUT_FEATURE_2')}</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="feature-card" bordered={false}>
                  <ClockCircleOutlined className="feature-icon" />
                  <Text className="feature-text">{t('ABOUT_FEATURE_3')}</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card className="feature-card" bordered={false}>
                  <BookOutlined className="feature-icon" />
                  <Text className="feature-text">{t('ABOUT_FEATURE_4')}</Text>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Levels Section */}
        <section className="levels-section">
          <div className="container">
            <Title level={2} className="section-title">
              {t('LEVELS_TITLE')}
            </Title>
            <Paragraph className="section-description">{t('LEVELS_DESC')}</Paragraph>
            <Row gutter={[32, 32]} className="levels-grid">
              <Col xs={24} md={12}>
                <Card className="level-card" hoverable>
                  <div className="level-badge">A1</div>
                  <Title level={3} className="level-title">
                    {t('LEVEL_A1_TITLE')}
                  </Title>
                  <Paragraph className="level-description">{t('LEVEL_A1_DESC')}</Paragraph>
                  <div className="schedule-info">
                    <ClockCircleOutlined />
                    <Text className="schedule-text">{t('SCHEDULE_A1')}</Text>
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card className="level-card" hoverable>
                  <div className="level-badge">A2/B1</div>
                  <Title level={3} className="level-title">
                    {t('LEVEL_A2_TITLE')}
                  </Title>
                  <Paragraph className="level-description">{t('LEVEL_A2_DESC')}</Paragraph>
                  <div className="schedule-info">
                    <ClockCircleOutlined />
                    <Text className="schedule-text">{t('SCHEDULE_A2')}</Text>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Format Section */}
        <section className="format-section">
          <div className="container">
            <Title level={2} className="section-title">
              {t('FORMAT_TITLE')}
            </Title>
            <Row gutter={[24, 16]}>
              <Col xs={24} md={12}>
                <div className="format-item">
                  <div className="format-bullet">✓</div>
                  <Text className="format-text">{t('FORMAT_ITEM_1')}</Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="format-item">
                  <div className="format-bullet">✓</div>
                  <Text className="format-text">{t('FORMAT_ITEM_2')}</Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="format-item">
                  <div className="format-bullet">✓</div>
                  <Text className="format-text">{t('FORMAT_ITEM_3')}</Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="format-item">
                  <div className="format-bullet">✓</div>
                  <Text className="format-text">{t('FORMAT_ITEM_4')}</Text>
                </div>
              </Col>
              <Col xs={24}>
                <div className="format-item">
                  <div className="format-bullet">✓</div>
                  <Text className="format-text">{t('FORMAT_ITEM_5')}</Text>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Teacher Section */}
        <section className="teacher-section">
          <div className="container">
            <Title level={2} className="section-title">
              {t('TEACHER_TITLE')}
            </Title>
            <Card className="teacher-card">
              <Row gutter={[48, 24]} align="middle">
                <Col xs={24} md={8} className="teacher-image-col">
                  <div className="teacher-avatar">
                    <HeartOutlined className="teacher-icon" />
                  </div>
                </Col>
                <Col xs={24} md={16}>
                  <Title level={3} className="teacher-name">
                    {t('TEACHER_NAME')}
                  </Title>
                  <Paragraph className="teacher-description">{t('TEACHER_DESC')}</Paragraph>
                  <blockquote className="teacher-quote">
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
            <Title level={2} className="section-title">
              {t('WHY_US_TITLE')}
            </Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card className="why-card" bordered={false}>
                  <HeartOutlined className="why-icon" />
                  <Title level={4} className="why-title">
                    {t('WHY_US_1_TITLE')}
                  </Title>
                  <Paragraph className="why-description">{t('WHY_US_1_DESC')}</Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="why-card" bordered={false}>
                  <TrophyOutlined className="why-icon" />
                  <Title level={4} className="why-title">
                    {t('WHY_US_2_TITLE')}
                  </Title>
                  <Paragraph className="why-description">{t('WHY_US_2_DESC')}</Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="why-card" bordered={false}>
                  <GlobalOutlined className="why-icon" />
                  <Title level={4} className="why-title">
                    {t('WHY_US_3_TITLE')}
                  </Title>
                  <Paragraph className="why-description">{t('WHY_US_3_DESC')}</Paragraph>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
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
                icon={<GlobalOutlined />}
              >
                {t('CTA_BUTTON')}
              </Button>
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


