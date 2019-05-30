import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:base_project/analytics.dart';
import 'base.dart';

class BaseContent extends StatefulWidget {
  final BaseBloc baseBloc;

  BaseContent({@required this.baseBloc});

  @override
  _BaseContentState createState() => _BaseContentState();
}

class _BaseContentState extends State<BaseContent> {
  FirebaseAnalytics analytics;

  @override
  Widget build(BuildContext context) {
    return BlocBuilder(
        bloc: widget.baseBloc,
        builder: (BuildContext context, BaseState state) {
          return Container();
        });
  }
}
