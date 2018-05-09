import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'assets/css/mint-reset.scss'
import axios from 'assets/js/fetch'

Vue.prototype.$http = axios

Vue.use(Mint);

