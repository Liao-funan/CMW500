# CONFigureSCSToolsSPOintSTDone

Module: SCST
Source: 33ea109a85194405.htm

## 原始指令文档说明
SCPI Concurrency Support Tools (SCST)
 > 
Synchronization Point
 > 
Command Reference
 > 
CONFigure:SCSTools:SPOint:STDone?
CONFigure:SCSTools:SPOint:STDone? 
<Name>
Tells the synchronization point that an ordered single task has been completed.
If a join command is answered with a single task order, the process is not counted as "joined" until this command is sent.
The <Status> is returned immediately. Evaluate it and continue accordingly.
Query parameters: 
<Name>
String with the name of the synchronization point to be informed
Return values: 
<Count>
Number of processes that have joined the synchronization point, including this call of the command
-1 indicates that a synchronization point with the entered name does not exist.
<Status>
RDY |
 
 NRDY |
 
 TOUT |
 
 NDEF
Status of the synchronization point
RDY
Ready. The required number of processes has joined.
Synchronization is complete. Continue your script.
NRDY
Not ready. More processes are expected to join.
Continue with a wait command.
TOUT
Timeout. The expected number of processes has not joined in time.
NDEF
There is no synchronization point with the entered <Name>.
Usage: 
Query only
Firmware/Software: 
V3.5.10
Top