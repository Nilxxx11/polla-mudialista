// Country code to flag emoji mapping
const countryFlags = {
    'KOR': '🇰🇷', // Korea Republic
    'CZE': '🇨🇿', // Czechia
    'MEX': '🇲🇽', // Mexico
    'USA': '🇺🇸', // USA
    'CAN': '🇨🇦', // Canada
    'BRA': '🇧🇷', // Brazil
    'ARG': '🇦🇷', // Argentina
    'ESP': '🇪🇸', // Spain
    'FRA': '🇫🇷', // France
    'GER': '🇩🇪', // Germany
    'ENG': '🏴󠁧󠁢󠁥󠁮󠁧󠁿', // England
    'POR': '🇵🇹', // Portugal
    'ITA': '🇮🇹', // Italy
    'BEL': '🇧🇪', // Belgium
    'NED': '🇳🇱', // Netherlands
    'CRO': '🇭🇷', // Croatia
    'URU': '🇺🇾', // Uruguay
    'COL': '🇨🇴', // Colombia
    'CHI': '🇨🇱', // Chile
    'PER': '🇵🇪', // Peru
    'ECU': '🇪🇨', // Ecuador
    'PAR': '🇵🇾', // Paraguay
    'VEN': '🇻🇪', // Venezuela
    'JPN': '🇯🇵', // Japan
    'KOR': '🇰🇷', // South Korea
    'AUS': '🇦🇺', // Australia
    'MAR': '🇲🇦', // Morocco
    'SEN': '🇸🇳', // Senegal
    'NGA': '🇳🇬', // Nigeria
    'CMR': '🇨🇲', // Cameroon
    'GHA': '🇬🇭', // Ghana
    'TUN': '🇹🇳', // Tunisia
    'ALG': '🇩🇿', // Algeria
    'EGY': '🇪🇬', // Egypt
    'IRN': '🇮🇷', // Iran
    'KSA': '🇸🇦', // Saudi Arabia
    'QAT': '🇶🇦', // Qatar
    'CRC': '🇨🇷', // Costa Rica
    'PAN': '🇵🇦', // Panama
    'HON': '🇭🇳', // Honduras
    'SUI': '🇨🇭', // Switzerland
    'AUT': '🇦🇹', // Austria
    'DEN': '🇩🇰', // Denmark
    'SWE': '🇸🇪', // Sweden
    'NOR': '🇳🇴', // Norway
    'POL': '🇵🇱', // Poland
    'SRB': '🇷🇸', // Serbia
    'CZE': '🇨🇿', // Czech Republic
    'SCO': '🏴󠁧󠁢󠁳󠁣󠁴󠁿', // Scotland
    'WAL': '🏴󠁧󠁢󠁷󠁬󠁳󠁿', // Wales
    'IRL': '🇮🇪', // Ireland
    'TUR': '🇹🇷', // Turkey
    'RUS': '🇷🇺', // Russia
    'UKR': '🇺🇦', // Ukraine
    'ROU': '🇷🇴', // Romania
    'HUN': '🇭🇺', // Hungary
    'GRE': '🇬🇷', // Greece
    'SVK': '🇸🇰', // Slovakia
    'SVN': '🇸🇮', // Slovenia
    'SRB': '🇷🇸', // Serbia
    'MKD': '🇲🇰', // North Macedonia
};

function getFlagByCode(code) {
    return countryFlags[code] || '';
}

function getFlagByTeamName(teamName) {
    const nameMap = {
        'Korea Republic': '🇰🇷',
        'Czechia': '🇨🇿',
        'Czech Republic': '🇨🇿',
        'Mexico': '🇲🇽',
        'USA': '🇺🇸',
        'United States': '🇺🇸',
        'Canada': '🇨🇦',
        'Brazil': '🇧🇷',
        'Argentina': '🇦🇷',
        'Spain': '🇪🇸',
        'España': '🇪🇸',
        'France': '🇫🇷',
        'Francia': '🇫🇷',
        'Germany': '🇩🇪',
        'Alemania': '🇩🇪',
        'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        'Inglaterra': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        'Portugal': '🇵🇹',
        'Italy': '🇮🇹',
        'Italia': '🇮🇹',
        'Belgium': '🇧🇪',
        'Bélgica': '🇧🇪',
        'Netherlands': '🇳🇱',
        'Países Bajos': '🇳🇱',
        'Croatia': '🇭🇷',
        'Uruguay': '🇺🇾',
        'Colombia': '🇨🇴',
        'Chile': '🇨🇱',
        'Peru': '🇵🇪',
        'Perú': '🇵🇪',
        'Ecuador': '🇪🇨',
        'Paraguay': '🇵🇾',
        'Venezuela': '🇻🇪',
        'Japan': '🇯🇵',
        'Japón': '🇯🇵',
        'South Korea': '🇰🇷',
        'Corea del Sur': '🇰🇷',
        'Australia': '🇦🇺',
        'Morocco': '🇲🇦',
        'Marruecos': '🇲🇦',
        'Senegal': '🇸🇳',
        'Nigeria': '🇳🇬',
        'Cameroon': '🇨🇲',
        'Camerún': '🇨🇲',
        'Ghana': '🇬🇭',
        'Tunisia': '🇹🇳',
        'Túnez': '🇹🇳',
        'Algeria': '🇩🇿',
        'Argelia': '🇩🇿',
        'Egypt': '🇪🇬',
        'Egipto': '🇪🇬',
        'Iran': '🇮🇷',
        'Irán': '🇮🇷',
        'Saudi Arabia': '🇸🇦',
        'Arabia Saudita': '🇸🇦',
        'Qatar': '🇶🇦',
        'Costa Rica': '🇨🇷',
        'Panama': '🇵🇦',
        'Panamá': '🇵🇦',
        'Honduras': '🇭🇳',
        'Switzerland': '🇨🇭',
        'Suiza': '🇨🇭',
        'Austria': '🇦🇹',
        'Denmark': '🇩🇰',
        'Dinamarca': '🇩🇰',
        'Sweden': '🇸🇪',
        'Suecia': '🇸🇪',
        'Norway': '🇳🇴',
        'Noruega': '🇳🇴',
        'Poland': '🇵🇱',
        'Polonia': '🇵🇱',
        'Serbia': '🇷🇸',
        'Scotland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        'Escocia': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        'Wales': '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
        'Gales': '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
        'Ireland': '🇮🇪',
        'Irlanda': '🇮🇪',
        'Turkey': '🇹🇷',
        'Turquía': '🇹🇷',
        'Russia': '🇷🇺',
        'Rusia': '🇷🇺',
        'Ukraine': '🇺🇦',
        'Ucrania': '🇺🇦',
        'Romania': '🇷🇴',
        'Rumania': '🇷🇴',
        'Hungary': '🇭🇺',
        'Hungría': '🇭🇺',
        'Greece': '🇬🇷',
        'Grecia': '🇬🇷'
    };
    return nameMap[teamName] || '⚽';
}
