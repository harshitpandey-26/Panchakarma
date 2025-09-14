export const determineDominantDosha = (vataTotal, pittaTotal, kaphaTotal) => {
  if (vataTotal > pittaTotal && vataTotal > kaphaTotal) {
    return 'vata';
  } else if (pittaTotal > vataTotal && pittaTotal > kaphaTotal) {
    return 'pitta';
  } else if (kaphaTotal > vataTotal && kaphaTotal > pittaTotal) {
    return 'kapha';
  }
  return 'balanced';
};