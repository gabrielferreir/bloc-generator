import 'package:flutter/material.dart';
import 'package:acif_mobile/analytics.dart';
import 'base.dart';

class BasePage extends StatefulWidget {
  @override
  _BasePageState createState() => _BasePageState();
}

class _BasePageState extends State<BasePage> {
  BaseBloc baseBloc;
  FirebaseAnalytics analytics;

  @override
  void initState() {
    this.baseBloc = BaseBloc();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    analytics = Analytics
        .of(context)
        .analytics;
    analytics.setCurrentScreen(screenName: 'Base');
    return Scaffold(
      appBar: AppBar(title: Text('Base')),
      body: Container(),
    );
  }

  @override
  void dispose() {
    super.dispose();
  }
}
