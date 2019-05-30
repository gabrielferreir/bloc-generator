import 'package:flutter/material.dart';
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';
import 'base.dart';

class BaseBloc extends Bloc<BaseEvent, BaseState> {
  BaseBloc();

  @override
  BaseState get initialState => BaseState.initial();

  @override
  Stream<BaseState> mapEventToState(BaseEvent event) async* {
  }

}
