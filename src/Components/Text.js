import React from 'react';
import { useTranslation } from 'react-i18next';
import './Text.css';

function Text(props) {
  const { t } = useTranslation();

  return <p id="text" style={{ color: props.color }}>"{t(props.text)}"</p>;
}

export default Text;
