# SENSeWCDMaSIGNiCONNectionCURRent

Module: WCDMA Signaling
Source: 60d6f46d552949df.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SENSe:WCDMa:SIGN<i>:CONNection:CURRent?
SENSe:WCDMa:SIGN<i>:CONNection:CURRent? 
Queries the type of the current connection.
Return values: 
<Type>
NONE |
 
 VOICe |
 
 VIDeo |
 
 SRB |
 
 TEST |
 
 PACKet
NONE
: none active connection
VOICe
: voice connection
VIDeo
: video connection
SRB
: signaling radio bearer only
TEST
: test mode
PACKet
: packet data connection using DAU
Example: 
See 
"Setting Up a CS Connection (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.2.80
Manual operation: 
See 
"Connection Setup"
Top