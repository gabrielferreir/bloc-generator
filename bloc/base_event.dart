import 'package:equatable/equatable.dart';
import 'package:meta/meta.dart';

abstract class BaseEvent extends Equatable {
  BaseEvent([List props = const []]) : super(props);
}
