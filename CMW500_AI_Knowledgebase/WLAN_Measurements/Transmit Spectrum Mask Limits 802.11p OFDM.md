# Transmit Spectrum Mask Limits 802.11p OFDM

Module: WLAN Measurements
Source: e8a3e8a83f3146c9.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Transmit Spectrum Mask Limits: 802.11p OFDM
Transmit Spectrum Mask Limits: 802.11p OFDM
The following commands define and enable the relative and absolute transmit spectrum masks for 802.11p OFDM signals.
The 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
MEValuation:
​
TSMask:
​
MSELection
 switch determines whether relative or absolute limits are used. The applicable relative limits are determined by the DUT's power class (
CONFigure:
​
WLAN:
​
MEAS<i>:
​
ISIGnal:
​
PCLass
).
List of Commands
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:ENABle
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:CA:Y:A
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:CA:Y:B
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:CA:Y:C
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:CA:Y:D
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:CA:Y:E
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:CB:Y:A
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:CB:Y:B
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:CB:Y:C
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:CB:Y:D
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:CB:Y:E
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:UDEFined:Y:A
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:UDEFined:Y:B
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:UDEFined:Y:C
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:UDEFined:Y:D
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:UDEFined:Y:E
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:ABSolute:Y:A
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:ABSolute:Y:B
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:ABSolute:Y:C
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:ABSolute:Y:D
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:ABSolute:Y:E
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:TSMask:POFDm:BW<bandwidth>:ABSolute:Y:F
Top