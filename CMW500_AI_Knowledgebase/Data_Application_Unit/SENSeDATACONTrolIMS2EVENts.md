# SENSeDATACONTrolIMS2EVENts

Module: Data Application Unit
Source: 6df5de2b47de42cd.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Service Control and Information
 > 
SENSe:DATA:CONTrol:IMS2:EVENts?
SENSe:DATA:CONTrol:IMS2:EVENts? 
Queries all entries of the event log.
For each entry, six parameters are returned: {<ID>, <Timestamps>, <Source>, <Destination>, <Type>, <State>}
entry 1
, {<ID>, ..., <State>}
entry 2
, ...
Return values: 
<ID>
String identifying the event log entry
Use this ID to query event details via 
SENSe:
​
DATA:
​
CONTrol:
​
IMS2:
​
HISTory?
<Timestamps>
Timestamp as string in the format 
"hh:mm:ss"
<Source>
Originating party as string
<Destination>
Terminating party as string
<Type>
AUDio |
 
 VIDeo |
 
 SMS |
 
 INValid |
 
 CALL |
 
 RCSLmsg |
 
 FILetransfer |
 
 FTLMode
AUDio
: audio call
VIDeo
: video call
SMS
: sent or received short message
CALL
: call setup, released call or call on hold
RCSLmsg
: sent or received RCS large message
FILetransfer
: file transfer
FTLMode
: file transfer large mode
<State>
OK |
 
 NOK |
 
 PROGgres |
 
 RINGing |
 
 ESTablished |
 
 HOLD |
 
 RESumed |
 
 RELeased |
 
 MEDiaupdate |
 
 BUSY |
 
 DECLined |
 
 INITialmedia |
 
 FILetransfer |
 
 SRVCcrelease |
 
 TERMinated |
 
 CANCeled |
 
 REJected |
 
 CREated
Status of the session or message transfer
Example: 
See 
"Sending a short message over IMS to the DUT"
Usage: 
Query only
Firmware/Software: 
V3.5.10, some values have been added in later releases
Manual operation: 
See 
"Event query"
Top