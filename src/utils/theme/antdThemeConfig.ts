import { ThemeConfig } from 'antd'
import PALLETTE from './pallette.module.scss'
const controlHeight = 50

export const defaultTheme: ThemeConfig = {
  token: {
    colorPrimary: '#667eea', // Purple gradient primary color
    colorPrimaryHover: '#764ba2', // Darker purple for hover
    colorLink: '#667eea',
    colorLinkHover: '#764ba2',
    colorSuccess: '#52c41a',
    colorWarning: '#ffd700', // Gold accent
    colorError: '#ff4d4f',
    controlHeight: 40,
    fontSize: 16,
    borderRadius: 12, // More rounded for modern look
    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.15)',
    colorBgContainer: '#ffffff',
    colorBorder: '#e8e8f0',
    colorTextBase: '#2c3e50',
    colorTextSecondary: '#595959',
  },
  components: {
    Button: {
      controlHeight,
      primaryShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
      borderRadius: 8,
      fontWeight: 500,
      colorPrimary: '#667eea',
      colorPrimaryHover: '#764ba2',
      colorPrimaryActive: '#5a67d8',
    },
    Select: {
      controlHeight,
      borderRadius: 8,
      colorBorder: '#e0e0e8',
      colorPrimaryHover: '#667eea',
    },
    DatePicker: {
      controlHeight,
      borderRadius: 8,
    },
    Input: {
      controlHeight,
      borderRadius: 8,
      colorBorder: '#e0e0e8',
      activeBorderColor: '#667eea',
      hoverBorderColor: '#764ba2',
    },
    InputNumber: {
      controlHeight,
      borderRadius: 8,
    },
    Card: {
      borderRadius: 16,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      colorBorderSecondary: '#f0f0f5',
    },
    Drawer: {
      borderRadius: 16,
      colorBgElevated: '#ffffff',
    },
    Form: {
      labelColor: '#2c3e50',
      labelFontSize: 15,
    },
    Typography: {
      colorTextHeading: '#2c3e50',
      fontWeightStrong: 600,
    },
    Layout: {
      headerBg: PALLETTE.primaryColor,
      headerColor: 'white',
    },
  },
}
