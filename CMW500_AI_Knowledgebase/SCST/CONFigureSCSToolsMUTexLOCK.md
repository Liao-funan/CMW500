# CONFigureSCSToolsMUTexLOCK

Module: SCST
Source: a3d5705ca7124a8b.htm

## 原始指令文档说明
SCPI Concurrency Support Tools (SCST)
 > 
Mutex
 > 
Command Reference
 > 
CONFigure:SCSTools:MUTex:LOCK?
CONFigure:SCSTools:MUTex:LOCK? 
<Name>, <Timeout>, <PollingInterval>
Sends a lock request for an existing mutex.
Evaluate the returned <State> and continue accordingly.
Query parameters: 
<Name>
String with the name of the mutex to be locked
<Timeout>
Maximum lock duration
Define a time that is longer than the maximum expected duration of the lock (time between lock and unlock command).
Range: 
1 ms  to  300E+3 ms
Default unit: 
ms (no unit suffix allowed)
<PollingInterval>
Maximum waiting time if the mutex is not free
The value must be smaller than the configured timeout.
Range: 
0 ms  to  300E+3 ms
Default unit: 
ms (no unit suffix allowed)
Return values: 
<Key>
Key for unlocking the mutex with the unlock command
If the locking attempt fails, the invalid key 0 is returned.
<State>
NEWLocked |
 
 PTOut |
 
 TOUT
Indicates the outcome of the lock request
NEWLocked
The query successfully locked the mutex.
You can enter the critical section.
PTOut
Polling timeout. Locking the mutex failed. The polling interval is over and the mutex is still not free.
Continue with a new lock request. Do not enter the critical section.
TOUT
Timeout. Locking the mutex failed. The mutex is free. But it became free due to a timeout, not due to an unlock command.
This value is only returned for the first lock attempt after the timeout. An entry is added to the error queue.
Continue with a new lock request. Do not enter the critical section. Investigate the error cause and eliminate it.
Usage: 
Query only
Firmware/Software: 
V3.5.10
Top