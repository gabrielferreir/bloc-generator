import 'package:acif_mobile/src/base/base.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';

void main() {
  setUp(() {
    // TODO Your code here
  });

  test('initial state is correct', () {
    expect(BaseBloc.initialState, BaseState());
  });
}
