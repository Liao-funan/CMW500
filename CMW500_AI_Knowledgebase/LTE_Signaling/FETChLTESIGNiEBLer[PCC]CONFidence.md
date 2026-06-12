# FETChLTESIGNiEBLer[PCC]CONFidence

Module: LTE Signaling
Source: df3b9b3cd0e04bd5.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:LTE:SIGN<i>:EBLer[:PCC]:CONFidence?
FETCh:LTE:SIGN<i>:EBLer[:PCC]:CONFidence? 
FETCh:LTE:SIGN<i>:EBLer:SCC<c>:CONFidence? 
Returns the pass/fail result of a confidence BLER measurement, for one carrier.
Suffix: 
<c>
1..4
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Confidence>
EPASs |
 
 EFAil |
 
 PASS |
 
 FAIL |
 
 UNDecided
EPASs, EFAil
: early pass, early fail
PASS, FAIL
: pass, fail
UNDecided
: undecided
Example: 
See 
"Performing a Confidence BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.0.30
V3.2.80: added UNDecided and SCC command
Top