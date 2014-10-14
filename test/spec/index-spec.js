KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('crosser', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/crosser/0.0.1/']});