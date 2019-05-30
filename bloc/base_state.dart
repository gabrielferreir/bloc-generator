import 'package:equatable/equatable.dart';
import 'package:meta/meta.dart';

@immutable
class BaseState extends Equatable {

  BaseState() : super([]);

  factory BaseState.initial() {
    return BaseState();
  }

  BaseState copyWith() {
    return BaseState();
  }

}
