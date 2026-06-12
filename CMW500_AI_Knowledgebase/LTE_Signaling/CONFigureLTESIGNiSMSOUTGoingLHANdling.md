# CONFigureLTESIGNiSMSOUTGoingLHANdling

Module: LTE Signaling
Source: f011efe98c9e4322.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Messaging (SMS)
 > 
CONFigure:LTE:SIGN<i>:SMS:OUTGoing:LHANdling
CONFigure:LTE:SIGN<i>:SMS:OUTGoing:LHANdling 
<LSMSHandling>
Selects the handling of messages exceeding 160 characters.
Parameters:
<LSMSHandling>
TRUNcate |
 
 MSMS
TRUNcate
The SMS is truncated to 160 characters, the rest is discarded.
MSMS
Up to five concatenated messages are sent, consisting in sum of up to 800 characters.
*RST:
TRUN
Example: 
See 
"Sending / Receiving a Short Message"
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Large SMS Handling"
Top