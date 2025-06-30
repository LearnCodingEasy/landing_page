import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

// --------------- PrimeVue Core Configuration ---------------
// Import PrimeVue library configuration
import PrimeVue from 'primevue/config'

// --------------- Popup Services (For Dialogs and Confirmations) ---------------
// Import services for confirmation and dialog popups
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'

// Buttons
import Button from 'primevue/button'
import ToggleButton from 'primevue/togglebutton'

// --------------- Form Components ---------------
import Fluid from 'primevue/fluid'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Password from 'primevue/password'
import FloatLabel from 'primevue/floatlabel'
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'
import Listbox from 'primevue/listbox'
import DatePicker from 'primevue/datepicker'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import ColorPicker from 'primevue/colorpicker'

// --------------- File Components ---------------
import FileUpload from 'primevue/fileupload'

// --------------- Menu Components ---------------
import Menubar from 'primevue/menubar'
import TieredMenu from 'primevue/tieredmenu'

// --------------- Image Components ---------------
import Image from 'primevue/image'
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'

// --------------- Popup Components ---------------
import Popover from 'primevue/popover'
import Dialog from 'primevue/dialog'
import Drawer from 'primevue/drawer'

// --------------- Panel Components ---------------
import Fieldset from 'primevue/fieldset'
import Stepper from 'primevue/stepper'
import StepList from 'primevue/steplist'
import StepPanels from 'primevue/steppanels'
import StepItem from 'primevue/stepitem'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'

// --------------- Card Components ---------------
import Card from 'primevue/card'

// --------------- Theme Components ---------------
import Noir from './presets/Noir.js'

// --------------- Notification Components ---------------
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Message from 'primevue/message'

// --------------- Icon Components ---------------
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

// --------------- Editor Components ---------------
import Editor from 'primevue/editor'

// --------------- Table Components ---------------
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'

import Row from 'primevue/row'

// --------------- Placeholder Components ---------------
import Skeleton from 'primevue/skeleton'

// --------------- Badge Components ---------------
import Badge from 'primevue/badge'
import OverlayBadge from 'primevue/overlaybadge'

// --------------- Carousel Components ---------------
import Carousel from 'primevue/carousel'

// --------------- Tag Components ---------------
import Tag from 'primevue/tag'

// --------------- DataView Components ---------------
import DataView from 'primevue/dataview'

// --------------- Paginator Components ---------------
import Paginator from 'primevue/paginator'

// --------------- Styles ---------------
import 'primeicons/primeicons.css'
import 'tailwindcss/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// --------------- Initialize PrimeVue ---------------
app.use(PrimeVue, {
  theme: {
    preset: Noir, 
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: false,
    },
  },
})

app.use(ConfirmationService)
app.use(DialogService)
app.use(ToastService)

// --------------- Register Components ---------------
app.component('prime_button', Button)
app.component('prime_fluid', Fluid)
app.component('prime_input_text', InputText)
app.component('prime_textarea', Textarea)
app.component('prime_input_password', Password)
app.component('prime_float_label', FloatLabel)
app.component('prime_check_box', Checkbox)
app.component('prime_radio_button', RadioButton)
app.component('prime_list_box', Listbox)
app.component('prime_date_picker', DatePicker)
app.component('prime_input_group', InputGroup)
app.component('prime_input_group_addon', InputGroupAddon)
app.component('prime_file_upload', FileUpload)
app.component('prime_toggle_button', ToggleButton)
app.component('prime_color_picker', ColorPicker)

app.component('prime_menubar', Menubar)
app.component('prime_tiered_menu', TieredMenu)

app.component('prime_image', Image)
app.component('prime_avatar', Avatar)
app.component('prime_avatar_group', AvatarGroup)

app.component('prime_card', Card)

app.component('prime_popover', Popover)
app.component('prime_dialog', Dialog)
app.component('prime_drawer', Drawer)

app.component('prime_fieldset', Fieldset)
app.component('prime_stepper', Stepper)
app.component('prime_steplist', StepList)
app.component('prime_steppanels', StepPanels)
app.component('prime_stepitem', StepItem)
app.component('prime_step', Step)
app.component('prime_steppanel', StepPanel)

app.component('prime_toast', Toast)
app.component('prime_message', Message)

app.component('prime_icon_field', IconField)
app.component('prime_input_icon', InputIcon)

app.component('prime_editor', Editor)

app.component('prime_data_table', DataTable)
app.component('prime_column', Column)
app.component('prime_column_group', ColumnGroup)
app.component('prime_row', Row)

app.component('prime_skeleton', Skeleton)

app.component('prime_badge', Badge)
app.component('prime_overlay_badge', OverlayBadge)

app.component('prime_carousel', Carousel)

app.component('prime_tag', Tag)

app.component('prime_data_view', DataView)

app.component('prime_paginator', Paginator)

app.mount('#app')
