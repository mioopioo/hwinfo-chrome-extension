# hwinfo-chrome-extension
Chrome extension. Send HW (cpu, gpu, mem) info to server.

How to use?
There is two ways to use this extension.

1. SHOW ONLY HW INFO
 - Install extension from chrome store and click on extension.

2. SEND HW INFO TO SERVER
 - Install extension from chrome store.
 - To your web page insert this iframe: 
    <iframe src="/hwinfo/{extension-id}" width="0" height="0" frameborder="0"></iframe>
 - on your server GET params is set
   https://your_domain/hwinfo/{extension-id}/
   ?cpu=Intel(R)%20Core(TM)%20i5-8600K%20CPU%20%40%203.60GHz&
   cap=24&a
   ava=17&
   gpu=ANGLE%20(Radeon%20RX%20570%20Series)

CPU - processor name
GPU - graffic card name
CAP - memory capacity GB
VAA - memory available GB
