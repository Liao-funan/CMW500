# Configuring a BERPER Measurement

Module: Bluetooth Signaling
Source: f8656120c6154e85.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
BER and PER Rx Tests
 > 
Configuring a BER/PER Measurement
Configuring a BER/PER Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure a BR/EDR BER measurement: number of transport 
// blocks to be measured and limits
// *****************************************************************************
CONFigure:BLUetooth:SIGN:RXQuality:PACKets:BEDR 10000; *OPC?
CONFigure:BLUetooth:SIGN:RXQuality:LIMit:MBER:BRATe 100; *OPC?
CONFigure:BLUetooth:SIGN:RXQuality:LIMit:MBER:EDRate 100; *OPC?
// *****************************************************************************
// Configure an LE measurement for LE 1M PHY: number of test packets
// to be measured, limit, and report integrity. Use stable modulation index.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:RXQuality:PACKets:LENergy:LE1M 1000; *OPC?
CONFigure:BLUetooth:SIGN:RXQuality:LIMit:MPER:LENergy:LE1M 20; *OPC?
CONFigure:BLUetooth:SIGN:RXQuality:RINTegrity:LENergy:LE1M ON; *OPC?
CONFigure:BLUetooth:SIGN:RXQuality:SMINdex:LENergy ON; *OPC?
Top