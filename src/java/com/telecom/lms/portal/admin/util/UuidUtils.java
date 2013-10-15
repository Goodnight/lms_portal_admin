package com.telecom.lms.portal.admin.util;

import java.util.UUID;

public class UuidUtils {

	public static final char[] charMap;

	static {
		charMap = new char[64];
		for (int i = 0; i < 10; i++) {
			charMap[i] = (char) ('0' + i);
		}
		for (int i = 10; i < 36; i++) {
			charMap[i] = (char) ('a' + i - 10);
		}
		for (int i = 36; i < 62; i++) {
			charMap[i] = (char) ('A' + i - 36);
		}
		charMap[62] = '_';
		charMap[63] = '-';
	}

	public static String hexTo64(String hex) {
		StringBuffer r = new StringBuffer();
		int index = 0;
		int[] buff = new int[3];
		int l = hex.length();
		for (int i = 0; i < l; i++) {
			index = i % 3;
			buff[index] = Integer.parseInt("" + hex.charAt(i), 16);
			if (index == 2) {
				r.append(charMap[buff[0] << 2 | buff[1] >>> 2]);
				r.append(charMap[(buff[1] & 3) << 4 | buff[2]]);
			}
		}
		return r.toString();
	}

	public static String getUUID22() {
		return hexTo64("0" + UUID.randomUUID().toString().replaceAll("-", "").toUpperCase());
	}

	public static String getUUID() {
		return UUID.randomUUID().toString().replaceAll("-", "").toUpperCase();
	}

	public static void test() {
		long t0 = System.currentTimeMillis();
		for (int i = 0; i < 10; i++) {
			getUUID();
		}
		long t1 = System.currentTimeMillis();
		for (int i = 0; i < 10; i++) {
			getUUID22();
		}
		long t2 = System.currentTimeMillis();
		System.out.println(t1 - t0);
		System.out.println(t2 - t1);
	}

	public static void main(String[] args) {

		test();
	}
}
