# Configuring Neighbor Cells and Reselection

Module: LTE Signaling
Source: 7f4097d30a944b85.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Neighbor Cells and Reselection
Configuring Neighbor Cells and Reselection
// *****************************************************************************
// Specify 2 neighbor cell entries for LTE, GSM, WCDMA, CDMA2000,
// 1xEV-DO and TD-SCDMA.
// *****************************************************************************
CONFigure:LTE:SIGN:NCELl:LTE:CELL1 ON, OB1, 10, 1, ZERO, ON
CONFigure:LTE:SIGN:NCELl:LTE:CELL2 ON, OB2, 700, 3, P1, OFF
CONFigure:LTE:SIGN:NCELl:GSM:CELL1 ON, G09, 0, ON
CONFigure:LTE:SIGN:NCELl:GSM:CELL2 ON, G09, 124, OFF
CONFigure:LTE:SIGN:NCELl:WCDMa:CELL1 ON, OB1, 10562, #H10A, ON
CONFigure:LTE:SIGN:NCELl:WCDMa:CELL2 ON, OB2, 412, #H10B, OFF
CONFigure:LTE:SIGN:NCELl:CDMA:CELL1 ON, USC, 1, 5, ON
CONFigure:LTE:SIGN:NCELl:CDMA:CELL2 ON, USC, 799, 6, OFF
CONFigure:LTE:SIGN:NCELl:EVDO:CELL1 ON, USC, 1, 5, ON
CONFigure:LTE:SIGN:NCELl:EVDO:CELL2 ON, USC, 799, 6, OFF
CONFigure:LTE:SIGN:NCELl:TDSCdma:CELL1 ON, OB1, 9500, #H1, ON
CONFigure:LTE:SIGN:NCELl:TDSCdma:CELL2 ON, OB2, 10100, #H2, ON
// *****************************************************************************
// Specify neighbor cell reselection thresholds per technology.
// *****************************************************************************
CONFigure:LTE:SIGN:NCELl:LTE:THResholds:LOW 5
CONFigure:LTE:SIGN:NCELl:GSM:THResholds:LOW 5
CONFigure:LTE:SIGN:NCELl:WCDMa:THResholds:LOW 5
CONFigure:LTE:SIGN:NCELl:CDMA:THResholds:LOW 10
CONFigure:LTE:SIGN:NCELl:EVDO:THResholds:LOW 10
CONFigure:LTE:SIGN:NCELl:TDSCdma:THResholds:LOW 5
// *****************************************************************************
// Specify general reselection parameters for the cell.
// *****************************************************************************
CONFigure:LTE:SIGN:CELL:RESelection:SEARch:INTRasearch OFF
CONFigure:LTE:SIGN:CELL:RESelection:SEARch:NINTrasearch OFF
CONFigure:LTE:SIGN:CELL:RESelection:TSLow 14
CONFigure:LTE:SIGN:CELL:RESelection:QUALity:RXLevmin -130
Top