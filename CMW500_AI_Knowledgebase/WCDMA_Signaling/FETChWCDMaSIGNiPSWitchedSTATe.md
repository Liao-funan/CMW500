# FETChWCDMaSIGNiPSWitchedSTATe

Module: WCDMA Signaling
Source: 57c74ed2c38441f3.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
FETCh:WCDMa:SIGN<i>:PSWitched:STATe?
FETCh:WCDMa:SIGN<i>:PSWitched:STATe? 
Queries the PS connection state, see also 
"PS Connection States"
.
Return values: 
<PS State>
OFF |
 
 ON |
 
 ATTached |
 
 CESTablished |
 
 RELeasing |
 
 CONNecting |
 
 SIGNaling |
 
 IHPReparate |
 
 IHANdover |
 
 OHANdover |
 
 IRPReparate |
 
 IREDirection |
 
 OREDirection
OFF
: signal is off
ON
: signal is on
ATTached
: attached
CESTablished
: connection established
RELeasing
: disconnect in progress
CONNecting
: connection setup in progress
SIGNaling
: signaling in progress
IHPReparate
: preparation for incoming handover
IHANdover
 incoming handover in progress
OHANdover
 outgoing handover in progress
IRPReparate
: preparation for incoming redirection
IREDirection
: incoming redirection in progress
OREDirection
: outgoing redirection in progress
*RST:
OFF
Example: 
See 
"Switching On the Cell Signal and the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V2.1.20: added CESTablished, RELeasing, CONNecting
V3.2.60: added IHPReparate, IHANdover, OHANdover
V3.2.80: added IRPReparate, IREDirection, OREDirection
Manual operation: 
See 
"Circuit Switched, Packet Switched, Reduced Signaling"
Top