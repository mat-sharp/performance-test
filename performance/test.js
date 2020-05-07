import http from 'k6/http'; 
import { Trend } from 'k6/metrics';
import { sleep } from 'k6';

const simpleRequestDuration = new Trend('simple_request_duration');

export default function(data) {
    
    let response = http.get('https://httpbin.org/get',
    {
        tags:
        {
            tag: "simple request",
        },
    });

    simpleRequestDuration.add(response.timings.duration, {tags: "simple request"});
    sleep(1);
};

