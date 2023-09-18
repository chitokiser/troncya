const path = require('path');

module.exports = {
  entry: './src/index.js', // 진입점 파일 설정
  output: {
    filename: 'bundle.js', // 번들된 파일 이름
    path: path.resolve(__dirname, 'dist') // 번들된 파일의 출력 경로
  }
};
