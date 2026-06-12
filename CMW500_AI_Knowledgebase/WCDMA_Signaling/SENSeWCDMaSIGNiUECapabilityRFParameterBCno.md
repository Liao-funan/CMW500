# SENSeWCDMaSIGNiUECapabilityRFParameterBCno

Module: WCDMA Signaling
Source: 3c958751c95b42af.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:RFParameter:BC<no>?
SENSe:WCDMa:SIGN<i>:UECapability:RFParameter:BC<no>? 
Indicates which carrier combination for specific band combination the UE supports.
Suffix: 
<no>
1..*
1
: band combination 1+8
2
: band combination 2+4
3
: band combination 1+5
4
: band combination 1+6
5
: band combination 2+5
Return values: 
<CComb12>
NO |
 
 YES
Indicates if the UE supports one contiguous carrier in band A and the maximum number of two contiguous carriers in band B
<CComb21>
NO |
 
 YES
Indicates if the UE supports the maximum number of two contiguous carriers in band A and one contiguous carrier in band B
<CComb13>
NO |
 
 YES
Indicates if the UE supports one contiguous carrier in band A and the maximum number of three contiguous carriers in band B
<CComb31>
NO |
 
 YES
Indicates if the UE supports the maximum number of three contiguous carriers in band A and one contiguous carrier in band B
<CComb22>
NO |
 
 YES
Indicates if the UE supports the maximum number of two contiguous carriers in band A and the maximum number of two contiguous carriers in band B
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.2.70
Manual operation: 
See 
"RF Parameters"
Top