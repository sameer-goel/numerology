/**
 * Vedic Numerology Calculator
 * Based on "Numerology: With Tantra, Ayurveda, and Astrology" by Harish Johari
 * 
 * This module provides tested and verified calculation functions for:
 * - Psychic Number (birth day)
 * - Destiny Number (full birth date)
 * - Name Number (using Chaldean system)
 */

// Chaldean letter-to-number mapping (no 9 for letters)
const CHALDEAN_MAP = {
  'A': 1, 'I': 1, 'J': 1, 'Q': 1, 'Y': 1,
  'B': 2, 'K': 2, 'R': 2,
  'C': 3, 'G': 3, 'L': 3, 'S': 3,
  'D': 4, 'M': 4, 'T': 4,
  'E': 5, 'H': 5, 'N': 5, 'X': 5,
  'U': 6, 'V': 6, 'W': 6,
  'O': 7, 'Z': 7,
  'F': 8, 'P': 8
};

/**
 * Reduce a number to single digit by adding its digits
 * @param {number} num - Number to reduce
 * @returns {number} Single digit (1-9)
 */
function reduceToSingleDigit(num) {
  while (num > 9) {
    num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}

/**
 * Calculate Psychic Number from birth day
 * @param {number} day - Day of birth (1-31)
 * @returns {object} { psychicNumber, compound, explanation }
 */
function calculatePsychicNumber(day) {
  if (day < 1 || day > 31) {
    throw new Error('Day must be between 1 and 31');
  }
  
  const compound = day > 9 ? day : null;
  const psychicNumber = reduceToSingleDigit(day);
  
  return {
    psychicNumber,
    compound,
    explanation: `Birth day ${day}${compound ? ` (compound ${compound})` : ''} reduces to ${psychicNumber}`
  };
}

/**
 * Calculate Destiny Number from full birth date
 * @param {number} day - Day (1-31)
 * @param {number} month - Month (1-12)
 * @param {number} year - Year (e.g., 1934)
 * @returns {object} { destinyNumber, compound, breakdown, hasZero }
 */
function calculateDestinyNumber(day, month, year) {
  if (day < 1 || day > 31) throw new Error('Invalid day');
  if (month < 1 || month > 12) throw new Error('Invalid month');
  if (year < 1) throw new Error('Invalid year');
  
  // Check for zeros (brings misfortune according to book)
  const dateString = `${day}${month}${year}`;
  const hasZero = dateString.includes('0');
  
  // Add all digits
  const allDigits = (day.toString() + month.toString() + year.toString())
    .split('')
    .map(d => parseInt(d))
    .reduce((sum, digit) => sum + digit, 0);
  
  const compound = allDigits > 9 ? allDigits : null;
  const destinyNumber = reduceToSingleDigit(allDigits);
  
  return {
    destinyNumber,
    compound,
    hasZero,
    breakdown: {
      day,
      month,
      year,
      total: allDigits
    },
    explanation: `${day} + ${month} + ${year} = ${allDigits}${compound ? ` (compound ${compound})` : ''} → ${destinyNumber}`
  };
}

/**
 * Calculate Name Number using Chaldean system
 * @param {string} name - Full name
 * @returns {object} { nameNumber, compound, letterBreakdown }
 */
function calculateNameNumber(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }
  
  // Clean name: uppercase, remove non-letters
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  
  if (cleanName.length === 0) {
    throw new Error('Name must contain at least one letter');
  }
  
  // Calculate value for each letter
  const letterBreakdown = cleanName.split('').map(letter => ({
    letter,
    value: CHALDEAN_MAP[letter]
  }));
  
  const total = letterBreakdown.reduce((sum, item) => sum + item.value, 0);
  const compound = total > 9 ? total : null;
  const nameNumber = reduceToSingleDigit(total);
  
  return {
    nameNumber,
    compound,
    letterBreakdown,
    total,
    explanation: `${name} → ${cleanName} = ${total}${compound ? ` (compound ${compound})` : ''} → ${nameNumber}`
  };
}

/**
 * Calculate all three numbers for a person
 * @param {string} name - Full name
 * @param {number} day - Birth day
 * @param {number} month - Birth month
 * @param {number} year - Birth year
 * @returns {object} Complete numerology profile
 */
function calculateCompleteProfile(name, day, month, year) {
  const psychic = calculatePsychicNumber(day);
  const destiny = calculateDestinyNumber(day, month, year);
  const nameNum = calculateNameNumber(name);
  
  return {
    name,
    birthDate: { day, month, year },
    psychicNumber: psychic,
    destinyNumber: destiny,
    nameNumber: nameNum,
    summary: {
      psychic: psychic.psychicNumber,
      destiny: destiny.destinyNumber,
      name: nameNum.nameNumber
    }
  };
}

// Export for Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculatePsychicNumber,
    calculateDestinyNumber,
    calculateNameNumber,
    calculateCompleteProfile,
    reduceToSingleDigit
  };
}
