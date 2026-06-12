# SENSeWCDMaSIGNiUECapabilityRFParameter

Module: WCDMA Signaling
Source: 4729c83e1c68473a.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:RFParameter?
SENSe:WCDMa:SIGN<i>:UECapability:RFParameter? 
Returns RF UE capability information.
The value pairs are returned 25 times (band I to XXII, band XXV, XXVI and XXXII).
Return values: 
<Band1>
NO |
 
 YES
Support of operating band I
<PowerClass1>
UE power class for band I
Range: 
1  to  4
... <Band14>
NO |
 
 YES
Support of operating band XIV
<PowerClass14>
UE power class for band XIV
<Band19>
NO |
 
 YES
Support of operating band XIX
<PowerClass19>
UE power class for band XIX
... <Band21>
NO |
 
 YES
Support of operating band XXI
<PowerClass21>
UE power class for band XXI
<Band15>
NO |
 
 YES
Support of operating band XV
<PowerClass15>
UE power class for band XV
... <Band18>
NO |
 
 YES
Support of operating band XVIII
<PowerClass18>
UE power class for band XVIII
<Band22>
NO |
 
 YES
Support of operating band XXII
<PowerClass22>
UE power class for band XXII
<Band25>
NO |
 
 YES
Support of operating band XXV
<PowerClass25>
UE power class for band XXV
<Band26>
NO |
 
 YES
Support of operating band XXVI
<PowerClass26>
UE power class for band XXVI
<Band32>
NO |
 
 YES
Support of operating band XXXII
<PowerClass32>
UE power class for band XXXII
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
V2.1.20: added bands XIX to XXI
V3.2.10: added bands XV to XVIII and XXII
V3.2.70: added bands XXV and XXVI
V3.5.30: added band XXXII
Manual operation: 
See 
"RF Parameters"
Top