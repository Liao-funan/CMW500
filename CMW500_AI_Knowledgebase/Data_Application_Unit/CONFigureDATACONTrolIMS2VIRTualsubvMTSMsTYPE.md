# CONFigureDATACONTrolIMS2VIRTualsubvMTSMsTYPE

Module: Data Application Unit
Source: 5abd84661c7245b3.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Virtual Subscriber Settings
 > 
Mobile-Terminating Messages
 > 
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:MTSMs:TYPE
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:MTSMs:TYPE 
<Type>
Selects the type of messages to be sent by virtual subscriber number <v>.
Suffix: 
<v>
1..20
Parameters:
<Type>
GPP |
 
 GPP2 |
 
 ACK |
 
 PAGer |
 
 LARGe |
 
 RCSChat |
 
 RCSGrpchat |
 
 GENeric
GPP
: 3GPP
GPP2
: 3GPP2 without delivery ACK
ACK
: 3GPP2 with delivery ACK
PAGer
: RCS pager mode
LARGe
: RCS large mode
RCSChat
: RCS 1 to 1 chat
RCSGrpchat
: RCS group chat
GENeric
: 3GPP generic SMS
*RST:
GPP
Example: 
See 
"Sending a short message over IMS to the DUT"
Firmware/Software: 
V3.5.10, V3.5.30 added PAGer, LARGe
V3.5.30 added RCSChat, V3.5.51 added RCSGrpchat
V3.7.11 added GENeric
Options: 
R&S CMW-KAA21 for PAGer, LARGe, RCSChat, RCSGrpchat
Manual operation: 
See 
"Message Type"
Top