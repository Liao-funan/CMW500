# CONFigureDATACONTrolIMS2SUBScribersIMPUHEADer

Module: Data Application Unit
Source: aa97d6e8a2234317.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Subscriber Settings
 > 
CONFigure:DATA:CONTrol:IMS2:SUBScriber<s>:IMPU:HEADer
CONFigure:DATA:CONTrol:IMS2:SUBScriber<s>:IMPU:HEADer 
<PAUHeader>
Selects which public IDs are sent to the DUT in the PAU header of the 200/OK response to REGISTER messages:
Configured: public user IDs configured in the subscriber settings
Registered: ID sent by the DUT in the "from" header of the REGISTER message
Generated: automatically generated ID starting with "tel:555"
Suffix: 
<s>
1..5
Parameters:
<PAUHeader>
CONRege |
 
 RECoge |
 
 CORE |
 
 RECN |
 
 COGE |
 
 REGE |
 
 CONF |
 
 REGD
CONRege
: configured, registered, generated
RECoge
: registered, configured, generated
CORE
: configured, registered
RECN
: registered, configured
COGE
: configured, generated
REGE
: registered, generated
CONF
: configured
REGD
: registered
Example: 
See 
"Configuring subscriber profiles"
Firmware/Software: 
V3.5.51
Manual operation: 
See 
"IMPUs in PAU Header"
Top