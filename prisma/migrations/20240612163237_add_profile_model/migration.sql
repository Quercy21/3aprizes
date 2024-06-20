/*
  Warnings:

  - Added the required column `image` to the `Formation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `utilisateur` table without a default value. This is not possible if the table is not empty.
  - Made the column `nom` on table `utilisateur` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prenom` on table `utilisateur` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `utilisateur` required. This step will fail if there are existing NULL values in that column.
  - Made the column `UserName` on table `utilisateur` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Paiement_CPaiementId_fkey` ON `paiement`;

-- DropIndex
DROP INDEX `Rapport_ForapportId_fkey` ON `rapport`;

-- DropIndex
DROP INDEX `Section_parentId_fkey` ON `section`;

-- DropIndex
DROP INDEX `utilisateur_UserNewsId_fkey` ON `utilisateur`;

-- AlterTable
ALTER TABLE `formation` ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `utilisateur` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    MODIFY `nom` VARCHAR(191) NOT NULL,
    MODIFY `prenom` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `UserName` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `utilisateur` ADD CONSTRAINT `utilisateur_UserNewsId_fkey` FOREIGN KEY (`UserNewsId`) REFERENCES `NewsLetter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilisateur` ADD CONSTRAINT `utilisateur_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rapport` ADD CONSTRAINT `Rapport_userRapportId_fkey` FOREIGN KEY (`userRapportId`) REFERENCES `utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rapport` ADD CONSTRAINT `Rapport_ForapportId_fkey` FOREIGN KEY (`ForapportId`) REFERENCES `Formation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paiement` ADD CONSTRAINT `Paiement_FPaiementId_fkey` FOREIGN KEY (`FPaiementId`) REFERENCES `Formation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paiement` ADD CONSTRAINT `Paiement_CPaiementId_fkey` FOREIGN KEY (`CPaiementId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_formationId_fkey` FOREIGN KEY (`formationId`) REFERENCES `Formation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entreprise` ADD CONSTRAINT `Entreprise_entrepriseId_fkey` FOREIGN KEY (`entrepriseId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
