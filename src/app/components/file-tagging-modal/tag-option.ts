/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/

export interface TagOption {
  name: string;
  codeset: number;
  type: ZLUX.TagType;
}

export function findTagOptionByCodeset(codeset: number): TagOption | undefined {
  return allTagOptions.find(option => option.codeset === codeset);
}

export const allTagOptions: TagOption[] = [
  { codeset: 0, name: 'Untagged', type: 'delete' },
  { codeset: -1, name: 'Binary', type: 'binary' },
  { codeset: 1047, name: "IBM-1047", type: 'text' },
  { codeset: 819, name: "ISO8859-1", type: 'text' },
  { codeset: 1208, name: "UTF-8", type: 'text' },
  { codeset: 37, name: "IBM-037", type: 'text' },
  { codeset: 273, name: "IBM-273", type: 'text' },
  { codeset: 274, name: "IBM-274", type: 'text' },
  { codeset: 275, name: "IBM-275", type: 'text' },
  { codeset: 277, name: "IBM-277", type: 'text' },
  { codeset: 278, name: "IBM-278", type: 'text' },
  { codeset: 280, name: "IBM-280", type: 'text' },
  { codeset: 281, name: "IBM-281", type: 'text' },
  { codeset: 282, name: "IBM-282", type: 'text' },
  { codeset: 284, name: "IBM-284", type: 'text' },
  { codeset: 285, name: "IBM-285", type: 'text' },
  { codeset: 290, name: "IBM-290", type: 'text' },
  { codeset: 297, name: "IBM-297", type: 'text' },
  { codeset: 300, name: "IBM-300", type: 'text' },
  { codeset: 301, name: "IBM-301", type: 'text' },
  { codeset: 420, name: "IBM-420", type: 'text' },
  { codeset: 424, name: "IBM-424", type: 'text' },
  { codeset: 425, name: "IBM-425", type: 'text' },
  { codeset: 437, name: "IBM-437", type: 'text' },
  { codeset: 500, name: "IBM-500", type: 'text' },
  { codeset: 808, name: "IBM-808", type: 'text' },
  { codeset: 813, name: "ISO8859-7", type: 'text' },
  { codeset: 833, name: "IBM-833", type: 'text' },
  { codeset: 834, name: "IBM-834", type: 'text' },
  { codeset: 835, name: "IBM-835", type: 'text' },
  { codeset: 836, name: "IBM-836", type: 'text' },
  { codeset: 837, name: "IBM-837", type: 'text' },
  { codeset: 838, name: "IBM-838", type: 'text' },
  { codeset: 848, name: "IBM-848", type: 'text' },
  { codeset: 850, name: "IBM-850", type: 'text' },
  { codeset: 852, name: "IBM-852", type: 'text' },
  { codeset: 855, name: "IBM-855", type: 'text' },
  { codeset: 856, name: "IBM-856", type: 'text' },
  { codeset: 858, name: "IBM-858", type: 'text' },
  { codeset: 859, name: "IBM-859", type: 'text' },
  { codeset: 861, name: "IBM-861", type: 'text' },
  { codeset: 862, name: "IBM-862", type: 'text' },
  { codeset: 864, name: "IBM-864", type: 'text' },
  { codeset: 866, name: "IBM-866", type: 'text' },
  { codeset: 867, name: "IBM-867", type: 'text' },
  { codeset: 869, name: "IBM-869", type: 'text' },
  { codeset: 870, name: "IBM-870", type: 'text' },
  { codeset: 871, name: "IBM-871", type: 'text' },
  { codeset: 872, name: "IBM-872", type: 'text' },
  { codeset: 874, name: "TIS-620", type: 'text' },
  { codeset: 875, name: "IBM-875", type: 'text' },
  { codeset: 880, name: "IBM-880", type: 'text' },
  { codeset: 901, name: "IBM-901", type: 'text' },
  { codeset: 902, name: "IBM-902", type: 'text' },
  { codeset: 904, name: "IBM-904", type: 'text' },
  { codeset: 912, name: "ISO8859-2", type: 'text' },
  { codeset: 914, name: "ISO8859-4", type: 'text' },
  { codeset: 915, name: "ISO8859-5", type: 'text' },
  { codeset: 916, name: "ISO8859-8", type: 'text' },
  { codeset: 920, name: "ISO8859-9", type: 'text' },
  { codeset: 921, name: "ISO8859-13", type: 'text' },
  { codeset: 922, name: "IBM-922", type: 'text' },
  { codeset: 923, name: "ISO8859-15", type: 'text' },
  { codeset: 924, name: "IBM-924", type: 'text' },
  { codeset: 927, name: "IBM-927", type: 'text' },
  { codeset: 928, name: "IBM-928", type: 'text' },
  { codeset: 930, name: "IBM-930", type: 'text' },
  { codeset: 932, name: "IBM-eucJC", type: 'text' },
  { codeset: 933, name: "IBM-933", type: 'text' },
  { codeset: 935, name: "IBM-935", type: 'text' },
  { codeset: 936, name: "IBM-936", type: 'text' },
  { codeset: 937, name: "IBM-937", type: 'text' },
  { codeset: 938, name: "IBM-938", type: 'text' },
  { codeset: 939, name: "IBM-939", type: 'text' },
  { codeset: 942, name: "IBM-942", type: 'text' },
  { codeset: 943, name: "IBM-943", type: 'text' },
  { codeset: 946, name: "IBM-946", type: 'text' },
  { codeset: 947, name: "IBM-947", type: 'text' },
  { codeset: 948, name: "IBM-948", type: 'text' },
  { codeset: 949, name: "IBM-949", type: 'text' },
  { codeset: 950, name: "BIG5", type: 'text' },
  { codeset: 951, name: "IBM-951", type: 'text' },
  { codeset: 956, name: "IBM-956", type: 'text' },
  { codeset: 957, name: "IBM-957", type: 'text' },
  { codeset: 958, name: "IBM-958", type: 'text' },
  { codeset: 959, name: "IBM-959", type: 'text' },
  { codeset: 964, name: "IBM-eucTW", type: 'text' },
  { codeset: 970, name: "IBM-eucKR", type: 'text' },
  { codeset: 1025, name: "IBM-1025", type: 'text' },
  { codeset: 1026, name: "IBM-1026", type: 'text' },
  { codeset: 1027, name: "IBM-1027", type: 'text' },
  { codeset: 1046, name: "IBM-1046", type: 'text' },
  { codeset: 1088, name: "IBM-1088", type: 'text' },
  { codeset: 1089, name: "ISO8859-6", type: 'text' },
  { codeset: 1112, name: "IBM-1112", type: 'text' },
  { codeset: 1115, name: "IBM-1115", type: 'text' },
  { codeset: 1122, name: "IBM-1122", type: 'text' },
  { codeset: 1123, name: "IBM-1123", type: 'text' },
  { codeset: 1124, name: "IBM-1124", type: 'text' },
  { codeset: 1125, name: "IBM-1125", type: 'text' },
  { codeset: 1126, name: "IBM-1126", type: 'text' },
  { codeset: 1140, name: "IBM-1140", type: 'text' },
  { codeset: 1141, name: "IBM-1141", type: 'text' },
  { codeset: 1142, name: "IBM-1142", type: 'text' },
  { codeset: 1143, name: "IBM-1143", type: 'text' },
  { codeset: 1144, name: "IBM-1144", type: 'text' },
  { codeset: 1145, name: "IBM-1145", type: 'text' },
  { codeset: 1146, name: "IBM-1146", type: 'text' },
  { codeset: 1147, name: "IBM-1147", type: 'text' },
  { codeset: 1148, name: "IBM-1148", type: 'text' },
  { codeset: 1149, name: "IBM-1149", type: 'text' },
  { codeset: 1153, name: "IBM-1153", type: 'text' },
  { codeset: 1154, name: "IBM-1154", type: 'text' },
  { codeset: 1155, name: "IBM-1155", type: 'text' },
  { codeset: 1156, name: "IBM-1156", type: 'text' },
  { codeset: 1157, name: "IBM-1157", type: 'text' },
  { codeset: 1158, name: "IBM-1158", type: 'text' },
  { codeset: 1159, name: "IBM-1159", type: 'text' },
  { codeset: 1160, name: "IBM-1160", type: 'text' },
  { codeset: 1161, name: "IBM-1161", type: 'text' },
  { codeset: 1165, name: "IBM-1165", type: 'text' },
  { codeset: 1250, name: "IBM-1250", type: 'text' },
  { codeset: 1251, name: "IBM-1251", type: 'text' },
  { codeset: 1252, name: "IBM-1252", type: 'text' },
  { codeset: 1253, name: "IBM-1253", type: 'text' },
  { codeset: 1254, name: "IBM-1254", type: 'text' },
  { codeset: 1255, name: "IBM-1255", type: 'text' },
  { codeset: 1256, name: "IBM-1256", type: 'text' },
  { codeset: 1362, name: "IBM-1362", type: 'text' },
  { codeset: 1363, name: "IBM-1363", type: 'text' },
  { codeset: 1364, name: "IBM-1364", type: 'text' },
  { codeset: 1370, name: "IBM-1370", type: 'text' },
  { codeset: 1371, name: "IBM-1371", type: 'text' },
  { codeset: 1380, name: "IBM-1380", type: 'text' },
  { codeset: 1381, name: "IBM-1381", type: 'text' },
  { codeset: 1383, name: "IBM-eucCN", type: 'text' },
  { codeset: 1386, name: "IBM-1386", type: 'text' },
  { codeset: 1388, name: "IBM-1388", type: 'text' },
  { codeset: 1390, name: "IBM-1390", type: 'text' },
  { codeset: 1399, name: "IBM-1399", type: 'text' },
  { codeset: 4396, name: "IBM-4396", type: 'text' },
  { codeset: 4909, name: "IBM-4909", type: 'text' },
  { codeset: 4930, name: "IBM-4930", type: 'text' },
  { codeset: 4933, name: "IBM-4933", type: 'text' },
  { codeset: 4946, name: "IBM-4946", type: 'text' },
  { codeset: 4971, name: "IBM-4971", type: 'text' },
  { codeset: 5026, name: "IBM-5026", type: 'text' },
  { codeset: 5031, name: "IBM-5031", type: 'text' },
  { codeset: 5035, name: "IBM-5035", type: 'text' },
  { codeset: 5052, name: "ISO-2022-JP", type: 'text' },
  { codeset: 5053, name: "IBM-5053", type: 'text' },
  { codeset: 5054, name: "IBM-5054", type: 'text' },
  { codeset: 5055, name: "IBM-5055", type: 'text' },
  { codeset: 5123, name: "IBM-5123", type: 'text' },
  { codeset: 5346, name: "IBM-5346", type: 'text' },
  { codeset: 5347, name: "IBM-5347", type: 'text' },
  { codeset: 5348, name: "IBM-5348", type: 'text' },
  { codeset: 5349, name: "IBM-5349", type: 'text' },
  { codeset: 5350, name: "IBM-5350", type: 'text' },
  { codeset: 5351, name: "IBM-5351", type: 'text' },
  { codeset: 5352, name: "IBM-5352", type: 'text' },
  { codeset: 5488, name: "IBM-5488", type: 'text' },
  { codeset: 8482, name: "IBM-8482", type: 'text' },
  { codeset: 9027, name: "IBM-9027", type: 'text' },
  { codeset: 9044, name: "IBM-9044", type: 'text' },
  { codeset: 9061, name: "IBM-9061", type: 'text' },
  { codeset: 9238, name: "IBM-9238", type: 'text' },
  { codeset: 12712, name: "IBM-12712", type: 'text' },
  { codeset: 13121, name: "IBM-13121", type: 'text' },
  { codeset: 13124, name: "IBM-13124", type: 'text' },
  { codeset: 13488, name: "UCS-2", type: 'text' },
  { codeset: 16684, name: "IBM-16684", type: 'text' },
  { codeset: 16804, name: "IBM-16804", type: 'text' },
  { codeset: 17248, name: "IBM-17248", type: 'text' },
  { codeset: 28709, name: "IBM-28709", type: 'text' },
  { codeset: 53668, name: "IBM-53668", type: 'text' },
  { codeset: 54191, name: "IBM-54191", type: 'text' },
  { codeset: 62383, name: "IBM-62383", type: 'text' },
];

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html

  SPDX-License-Identifier: EPL-2.0

  Copyright Contributors to the Zowe Project.
*/
