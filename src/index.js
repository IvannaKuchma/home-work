
import '@babel/polyfill';
import * as $ from 'jquery'
import Post from '@model/post'
import json from '@assets/data'
import webpackLogo from '@assets/icon-square-big.png'
import xml from '@assets/data.xml'
import csv from '@/assets/data.csv'
import '@css/style.css'
import './styles/less/style.less'
import './styles/sass/style.scss'
import './styles/sass/style.sass'


const post = new Post('Webpack Post Title', webpackLogo)
$('pre').addClass('code').html(post.toString())
console.log('JSON:', json)
console.log('XML:', xml)
console.log('CSV:', csv)
const TerserPlugin = require('terser-webpack-plugin' );

async function start() {
return await new Promise((r) => setTimeout(() => r('Async done.'), 2000))
}
start().then((res) => console.log(res))

class Util {
static id = Date.now();
}
console.log('Util Id:', Util.id);

const optimization = () =>
    ({ splitChunks: {
        chunks: 'all',
    },
    minimizer: [
        new CssMinimizerWebpackPlugin (),
        new TerserPlugin()
    ]
    });