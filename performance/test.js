import http from 'k6/http'; 
import { Trend } from 'k6/metrics';
import { sleep } from 'k6';

const simpleRequestDuration = new Trend('simple_request_duration');

export let options = {
    duration: "1m",
    vus: 100,
    thresholds: {
        simple_request_duration: ["p(95)<1200"]
    }
};

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

