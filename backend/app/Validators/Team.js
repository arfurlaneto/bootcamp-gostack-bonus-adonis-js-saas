'use strict'

class Team {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required'
    }
  }
}

module.exports = Team
