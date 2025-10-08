import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vybb0bag',
    dataset: 'production'
  },
  deployment: {
    appId: 'bg0aylbb043rba0p4v129mqy',
    autoUpdates: true
  }
})
