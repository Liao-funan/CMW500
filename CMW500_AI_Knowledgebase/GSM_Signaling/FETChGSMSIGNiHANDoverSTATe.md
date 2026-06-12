# FETChGSMSIGNiHANDoverSTATe

Module: GSM Signaling
Source: 6c4e57c7ff244ead.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Handover Settings
 > 
General Handover Settings
 > 
FETCh:GSM:SIGN<i>:HANDover:STATe?
FETCh:GSM:SIGN<i>:HANDover:STATe? 
Returns whether the BCCH and the TCH are in different GSM bands. Initially both channels use the same band, but the band used by the TCH can be changed via a dual-band handover. A disconnect resets the parameter.
Return values: 
<HandoverState>
OFF |
 
 DUALband
OFF:
 BCCH channel and TCH channel are in the same GSM band - either because no handover at all has been performed or the last handover target was the original band
DUALband:
 Dual-band handover to another GSM band has been performed successfully; BCCH and TCH are in different GSM bands
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Execute"
Top