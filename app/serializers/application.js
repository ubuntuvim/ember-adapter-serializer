// app/serializers/application.js

import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({

    // 此方法响应请求的时候执行
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {

        // 格式化birth的时间格式
        //默认显示的时间格式为	2016-06-09T00:00:00.000Z ，简单处理直接截取前面的10位
        // 只是为了演示方法normalizeResponse的使用，实际项目中不推荐这样的用法，因为需要遍历每个数据，效率不好
        payload.data.forEach(function(item, index) {
            var oldDate = item.attributes.birth;
            if (oldDate) {
                oldDate = oldDate.substring(0, 10);
            }
            item.attributes.birth = oldDate;
            oldDate = null;
        });

        return this._super(...arguments);
    }
    // 此方法发送请求的时候回执行
    // serialize(snapshot, options) {
    //
    // }
});
