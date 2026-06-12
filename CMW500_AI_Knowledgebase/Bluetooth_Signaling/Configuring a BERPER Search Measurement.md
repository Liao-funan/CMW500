# Configuring a BERPER Search Measurement

Module: Bluetooth Signaling
Source: bb4ef482677148bf.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
BER Search and PER Search Rx Tests
 > 
Configuring a BER/PER Search Measurement
Configuring a BER/PER Search Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure a BR/EDR BER search measurement: number of transport 
// blocks to be measured, limits and level steps
// *****************************************************************************
CONFigure:BLUetooth:SIGN:RXQuality:SEARch:PACKets:BEDR 10000; *OPC?
CONFigure:BLUetooth:SIGN:RXQuality:SEARch:LIMit:MBER:BRATe 100; *OPC?
CONFigure:BLUetooth:SIGN:RXQuality:SEARch:LIMit:MBER:EDRate 100; *OPC?
CONFigure:BLUetooth:SIGN:RXQuality:SEARch:STEP:BREDr 1; *OPC?
// *****************************************************************************
// Configure an LE search measurement for LE 1M PHY: number of test 
// packets to be measured, limit, level step and report integrity.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:RXQuality:SEARch:PACKets:LENergy:LE1M 1000; *OPC?
CONFigure:BLUetooth:SIGN:RXQuality:SEARch:LIMit:MPER:LENergy:LE1M 20; *OPC?
CONFigure:BLUetooth:SIGN:RXQuality:SEARch:STEP:LENergy 1; *OPC?
CONFigure:BLUetooth:SIGN:RXQuality:SEARch:RINTegrity:LENergy:LE1M ON; *OPC?
Top