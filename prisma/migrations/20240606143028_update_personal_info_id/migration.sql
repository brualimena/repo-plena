-- CreateTable
CREATE TABLE "PersonalInfo" (
    "personal_info_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "reference" DATE NOT NULL,
    "last_period" DATE,
    "menstrual_cycle_status" VARCHAR,
    "weight" DECIMAL,
    "height" DECIMAL,
    "waist_circumference" DECIMAL,
    "fsh_value" DECIMAL,
    "fsh_unit" VARCHAR,
    "estradiol_value" DECIMAL,
    "estradiol_unit" VARCHAR,
    "date_created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("personal_info_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_user_id_key" ON "PersonalInfo"("user_id");
