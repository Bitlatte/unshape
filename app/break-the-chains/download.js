export default function Download(url, format) {
  let urlSplit = url.split("/");

  let downloadUrl = `https://cad.onshape.com/api/documents/d/${urlSplit[4]}/w/${urlSplit[6]}/e/${urlSplit[8]}/export?format=${format}&destinationName=Product&mode=binary&scale=1.0&resolution=medium&units=meter&grouping=true&useYAxisAsUp=false&angleTolerance=0.1090830782496456&chordTolerance=0.00012&minFacetWidth=0.000254&triggerAutoDownload=true&storeInDocument=false&linkDocumentId=${urlSplit[4]}&linkDocumentWorkspaceId=${urlSplit[6]}&configuration=default`;

  let a = document.createElement("a");
  a.href = downloadUrl;
  a.click();

  return downloadUrl;
}
