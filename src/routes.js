import React from 'react'
import {Switch, Route} from "react-router-dom"
import GlobalFeed from './pages/globalFeed'
import Article from './pages/article'
import Authentication from './pages/authentication'

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={GlobalFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/article/:slug" exact component={Article} />
    </Switch>
  )
} 