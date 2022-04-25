import {Command} from '@oclif/core'
import * as notifier from 'node-notifier'

export class MyCommand extends Command {
  async run() {
    notifier.notify({
      title: 'Your Payment Is Due',
      message: 'Hello Website Owner Your Payment is Due Now! To disphear this message please make payment soon as possible.!'
    })
  }
}