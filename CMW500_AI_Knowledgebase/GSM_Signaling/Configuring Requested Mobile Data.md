# Configuring Requested Mobile Data

Module: GSM Signaling
Source: 82f933a448ef4b91.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Requested Mobile Data
Configuring Requested Mobile Data
// *****************************************************************************
// Tell the MS to send its IMEI during location / routing area updates.
// Enable early classmark sending and disable classmark3 request.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:IMEirequest ON
CONFigure:GSM:SIGN:CELL:ECSending ON
CONFigure:GSM:SIGN:CELL:CREQuest OFF
Top