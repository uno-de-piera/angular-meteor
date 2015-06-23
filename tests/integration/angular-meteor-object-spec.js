describe('$meteorObject service', function() {
  var $meteorObject,
    MyCollection,
    testObjectId = '123123',
    testObject = {
      _id : testObjectId,
      prop : 'value',
      another : 'different value'
    };

  beforeEach(angular.mock.module('angular-meteor'));

  beforeEach(angular.mock.inject(function(_$meteorObject_) {
    $meteorObject = _$meteorObject_;

    MyCollection = new Mongo.Collection(null);
    MyCollection.insert(testObject);
  }));

  it('should return the object in the collection that matches the given id', function() {
    var object = $meteorObject(MyCollection, testObjectId);

    expect(object.getRawObject()).toEqual(testObject);
  });
});
